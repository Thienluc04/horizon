import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Label } from 'components/label';
import { useCookies } from 'react-cookie';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import NotFountPage from './NotFoundPage';
import { CurrentUser, Profile, Response } from 'models';
import { Radio } from 'components/checkbox';
import { gender, imgbbAPI, status } from 'utils/constant';
import { ImageUpload } from 'components/common/ImageUpload';
import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import userApi from 'api/userApi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export interface ProfilePageProps {}

const schema = yup.object({
  fullname: yup.string().required('Please enter your fullname'),
  username: yup.string().required('Please enter your username'),
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  gender: yup.string().required('Please choose your gender'),
  PhoneNumber: yup.string().required('Please choose your phone number'),
  DateOfBirth: yup.string().required('Please enter your date'),
});

export default function ProfilePage(_: ProfilePageProps) {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const [cookies, setCookies] = useCookies(['currentUser']);

  const currentUser: CurrentUser = cookies.currentUser;

  const [imgUrl, setImgUrl] = useState('');
  const [loadingImg, setLoadingImg] = useState(false);

  const handleRemoveImage = () => {
    setImgUrl('');
    setValue('urlAvata', '');
  };

  useEffect(() => {
    (async () => {
      if (currentUser) {
        const response: Response<Profile> = await userApi.getProfile(currentUser.username);
        reset(response.data);
        setImgUrl(response.data.urlAvata);
      }
    })();
  }, []);

  useEffect(() => {
    if (errors) {
      const error = Object.values(errors);
      const errorMessage: String | undefined = error[0]?.message?.toString();

      toast.error(errorMessage);
    }
  }, [errors]);

  const handleSelectImage = async (e: any) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    setLoadingImg(true);
    const response = await axios({
      method: 'post',
      url: imgbbAPI,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.data.data) {
      setImgUrl(response.data.data.url);
      setLoadingImg(false);
    }
  };

  const watchGender = watch('idGender');

  if (!cookies.currentUser) return <NotFountPage></NotFountPage>;

  const handleUpdateProfile: SubmitHandler<FieldValues> = async (values) => {
    if (!isValid) return;
    setValue('urlAvata', imgUrl);
    const response: any = await userApi.updateProfile({
      username: currentUser.username,
      fullname: values.fullname,
      email: values.email,
      idGender: values.idGender,
      DateOfBith: values.DateOfBirth,
      PhoneNumber: values.PhoneNumber,
      urlAvata: values.urlAvata,
    });

    if (response.data === status.OK) {
      toast.success('Update profile success');
      setCookies('currentUser', {
        idRole: currentUser.idRole,
        urlAvata: values.urlAvata,
        username: currentUser.username,
      });
    } else if (response === status.ERROR) {
      toast.error('Update profile error');
    }
  };

  return (
    <div className="max-w-[1180px] mx-auto py-10">
      <form onSubmit={handleSubmit(handleUpdateProfile)} className="flex-1">
        <h1 className="px-4 text-2xl">Profile user</h1>
        <div className="flex flex-col gap-5 lg:gap-10 lg:mt-10 mt-5 px-4">
          <div className="flex gap-10">
            <div className="flex flex-1 flex-col gap-[10px]">
              <ImageUpload
                imgUrl={imgUrl}
                loading={loadingImg}
                removeImage={handleRemoveImage}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleSelectImage(e)}
                className="rounded-full w-[100px] !h-[100px] xl:w-[200px] xl:!h-[200px] mx-auto"
              ></ImageUpload>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-5 lg:gap-10">
            <div className="flex-1 flex flex-col gap-3">
              <Label htmlFor="username">Username</Label>
              <Input
                control={control}
                name="username"
                placeholder="Please enter your username"
                className="w-[350px] lg:w-full"
                type="username"
                disabled
              ></Input>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                control={control}
                name="email"
                placeholder="Enter your email"
                className="w-[350px] lg:w-full"
                type="email"
              ></Input>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-5 lg:gap-10">
            <div className="flex-1 flex flex-col gap-3">
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                control={control}
                name="fullname"
                placeholder="Please enter your fullname"
                className="w-[350px] lg:w-full"
                type="fullname"
              ></Input>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <Label htmlFor="idGender">Gender</Label>
              <div className="flex flex-wrap gap-5">
                <Radio
                  name="idGender"
                  control={control}
                  checked={watchGender === gender.MALE}
                  value={gender.MALE}
                >
                  Male
                </Radio>
                <Radio
                  name="idGender"
                  control={control}
                  checked={watchGender === gender.FEMALE}
                  value={gender.FEMALE}
                >
                  Female
                </Radio>
                <Radio
                  name="idGender"
                  control={control}
                  checked={watchGender === gender.OTHER}
                  value={gender.OTHER}
                >
                  Other
                </Radio>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-5 lg:gap-10">
            <div className="flex-1 flex flex-col gap-3">
              <Label htmlFor="PhoneNumber">Phone Number</Label>
              <Input
                control={control}
                name="PhoneNumber"
                placeholder="Enter your phone number"
                type="text"
                className="w-[350px] lg:w-full"
              ></Input>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <Label htmlFor="DateOfBirth">Date Of Birth</Label>
              <Input
                control={control}
                name="DateOfBirth"
                type="date"
                placeholder=""
                className="w-[350px] lg:w-full"
              ></Input>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-5 lg:gap-10">
            <Link to={'/profile/password'} className="text-primary">
              Change your password
            </Link>
          </div>
        </div>
        <div className="mt-10 lg:mt-[60px] flex justify-center">
          <Button isLoading={isSubmitting} type="submit" kind="primary">
            Update profile
          </Button>
        </div>
      </form>
    </div>
  );
}
