import { Button } from 'components/button';
import { Input } from 'components/input';
import { Label } from 'components/label';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authAction, selectAuthLoadingRegister } from 'features/auth/authSlice';
import { gender, role } from 'utils/constant';

export interface RegisterPageProps {}

const schema = yup.object({
  fullname: yup.string().required('Please enter your fullname'),
  username: yup.string().required('Please enter your username'),
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(6, 'The password must be more than 6 characters'),
  rePassword: yup
    .string()
    .required('Please enter your password again')
    .min(6, 'The password must be more than 6 characters'),
});

export default function RegisterPage({}: RegisterPageProps) {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    document.title = 'Register';
  }, []);

  useEffect(() => {
    if (errors) {
      const error = Object.values(errors);
      const errorMessage: String | undefined = error[0]?.message?.toString();

      toast.error(errorMessage);
    }
  }, [errors]);

  const [passwordShow, setPasswordShow] = useState<boolean>(false);
  const [rePasswordShow, setRePasswordShow] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectAuthLoadingRegister);

  const handleSignUp: SubmitHandler<FieldValues> = async (values) => {
    if (!isValid) return;
    if (values.password === values.rePassword) {
      await dispatch(
        authAction.authRegister({
          username: values.username,
          email: values.email,
          password: values.password,
          fullname: values.fullname,
          idGender: gender.OTHER,
          idRole: role.CUSTOMER,
          DateOfBirth: '2000-01-01',
          PhoneNumber: '',
          urlAvata: '',
        })
      );
    } else {
      toast.error('Password and rePassword must be the same');
    }
  };

  return (
    <>
      <div className="mx-auto md:w-[500px] w-[350px] py-5 xl:py-[100px] md:px-0 px-3">
        <div className="text-center mb-5 flex justify-center">
          <Link to={'/'}>
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <form noValidate onSubmit={handleSubmit(handleSignUp)} className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Label htmlFor="fullname">Full Name</Label>
            <Input
              control={control}
              name="fullname"
              placeholder="Please enter your fullname"
              type="text"
            ></Input>
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="username">Username</Label>
            <Input
              control={control}
              name="username"
              placeholder="Please enter your username"
              type="text"
            ></Input>
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              control={control}
              name="email"
              placeholder="Please enter your email"
              type="email"
            ></Input>
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="password">Password</Label>
            <Input
              control={control}
              name="password"
              placeholder="Please enter your password"
              type={passwordShow ? 'text' : 'password'}
              passwordShow={passwordShow}
              setPasswordShow={setPasswordShow}
              hasEye
            ></Input>
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="rePassword">Retype Password</Label>
            <Input
              control={control}
              name="rePassword"
              placeholder="Please enter your password again"
              type={rePasswordShow ? 'text' : 'password'}
              passwordShow={rePasswordShow}
              setPasswordShow={setRePasswordShow}
              hasEye
            ></Input>
          </div>
          <p>
            Do you already have an account?{' '}
            <Link to={'/login'} className="text-primary">
              Login
            </Link>
          </p>
          <Button isLoading={loading} type="submit" className="w-[150px] mx-auto">
            Register
          </Button>
        </form>
      </div>
    </>
  );
}
