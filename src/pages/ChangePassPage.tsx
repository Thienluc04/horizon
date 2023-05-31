import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'components/input';
import { Label } from 'components/label';
import { useCookies } from 'react-cookie';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import NotFountPage from './NotFoundPage';
import { Button } from 'components/button';
import { toast } from 'react-toastify';
import { useAppDispatch } from 'app/hooks';
import { userAction } from 'features/user/userSlice';
import { useEffect, useState } from 'react';

export interface ChangePassPageProps {}

const schema = yup.object({
  oldPass: yup.string().required('Please enter your old password'),
  newPass: yup.string().required('Please enter your new password'),
  reNewPass: yup.string().required('Please retype your new password'),
});

export default function ChangePassPage({}: ChangePassPageProps) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const [cookies] = useCookies(['currentUser']);
  const dispatch = useAppDispatch();

  const [isOldPassShow, setIsOldPassShow] = useState<boolean>(false);
  const [isNewPassShow, setIsNewPassShow] = useState<boolean>(false);
  const [isReNewPassShow, setIsReNewPassShow] = useState<boolean>(false);

  useEffect(() => {
    if (errors) {
      const error = Object.values(errors);
      const errorMessage: String | undefined = error[0]?.message?.toString();

      toast.error(errorMessage);
    }
  }, [errors]);

  const currentUser = cookies.currentUser;

  const handleChangePassword: SubmitHandler<FieldValues> = (values) => {
    if (!isValid) return;
    if (values.newPass === values.reNewPass) {
      dispatch(
        userAction.fetchChangePass({
          username: currentUser.username,
          oldPass: values.oldPass,
          newPass: values.newPass,
        })
      );
      reset({
        oldPass: '',
        newPass: '',
        reNewPass: '',
      });
    } else {
      toast.error('New password and reNewPassword must be the same');
    }
  };

  if (!currentUser) return <NotFountPage></NotFountPage>;

  return (
    <div className="max-w-[1180px] mx-auto pt-10 pb-[130px] xl:px-0 px-4">
      <form onSubmit={handleSubmit(handleChangePassword)}>
        <h1 className="text-2xl">Change password</h1>
        <div className="mt-10 flex xl:flex-row flex-col items-center justify-center flex-wrap gap-10">
          <div className="flex gap-3 flex-col xl:w-1/3 w-full">
            <Label htmlFor="oldPass">Old Password</Label>
            <Input
              control={control}
              name="oldPass"
              placeholder="Please enter your old password"
              type={isOldPassShow ? 'text' : 'password'}
              passwordShow={isOldPassShow}
              setPasswordShow={setIsOldPassShow}
              hasEye
            ></Input>
          </div>
          <div className="flex gap-3 flex-col xl:w-1/3 w-full">
            <Label htmlFor="newPass">New Password</Label>
            <Input
              control={control}
              name="newPass"
              placeholder="Please enter your new password"
              type={isNewPassShow ? 'text' : 'password'}
              passwordShow={isNewPassShow}
              setPasswordShow={setIsNewPassShow}
              hasEye
            ></Input>
          </div>
          <div className="flex gap-3 flex-col xl:w-1/3 w-full">
            <Label htmlFor="reNewPass">Retype new password</Label>
            <Input
              control={control}
              name="reNewPass"
              placeholder="Please retype your new password"
              type={isReNewPassShow ? 'text' : 'password'}
              passwordShow={isReNewPassShow}
              setPasswordShow={setIsReNewPassShow}
              hasEye
            ></Input>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Button isLoading={isSubmitting} type="submit" kind="primary">
            Update password
          </Button>
        </div>
      </form>
    </div>
  );
}
