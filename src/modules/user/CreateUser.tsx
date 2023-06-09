import { yupResolver } from '@hookform/resolvers/yup';
import authApi from 'api/authApi';
import { Button } from 'components/button';
import { Radio } from 'components/checkbox';
import { Input } from 'components/input';
import { Label } from 'components/label';
import { useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { gender, role, status } from 'utils/constant';
import * as yup from 'yup';

export interface CreateUserProps {}

const schema = yup.object({
  username: yup.string().required('Please enter the username'),
  email: yup.string().email('Please enter a valid email').required('Please enter the email'),
  fullname: yup.string().required('Please enter the fullname'),
  idRole: yup.string().required('Please choose the role'),
});

export function CreateUser(_: CreateUserProps) {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (errors) {
      const error = Object.values(errors);
      const errorMessage: String | undefined = error[0]?.message?.toString();

      toast.error(errorMessage);
    }
  }, [errors]);

  useEffect(() => {
    setValue('password', '123456');
  }, []);

  const watchRole = watch('idRole');

  const handleCreateUser: SubmitHandler<FieldValues> = async (values) => {
    if (!isValid) return;
    try {
      const response: any = await authApi.register({
        username: values.username,
        email: values.email,
        password: values.password,
        fullname: values.fullname,
        idGender: gender.OTHER,
        idRole: values.idRole,
        DateOfBirth: '2000-01-01',
        PhoneNumber: '',
        urlAvata: '',
      });
      if (response === status.OK) {
        toast.success('Account has just been created');
      } else if (response === status.EXIST) {
        toast.error('Account already exists');
      } else if (response === status.ERROR) {
        toast.error("Can't create this account, please enter again");
      }
    } catch (error) {
      console.log(error);
    }
    reset({ username: '', email: '', fullname: '', idRole: '', password: '123456' });
  };
  return (
    <div className="p-6 pr-12 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold leading-7">Create User</h1>
      <div className="flex justify-between">
        <div className="flex">
          <p className="font-semibold mt-1">
            Home {'>'} Manage Users {'>'} Create User
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(handleCreateUser)} className="flex-1">
        <div className="flex flex-col gap-5 lg:gap-10 lg:mt-10 mt-5 px-4">
          <div className="flex lg:flex-row flex-col items-center gap-5 lg:gap-10">
            <div className="flex-1 flex flex-col gap-3">
              <Label htmlFor="username">Username</Label>
              <Input
                control={control}
                name="username"
                placeholder="Please enter your username"
                className="w-[350px] lg:w-full bg-white border !border-dashboardPrimary"
                type="username"
              ></Input>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                control={control}
                name="email"
                placeholder="Enter your email"
                className="w-[350px] lg:w-full bg-white border !border-dashboardPrimary"
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
                className="w-[350px] lg:w-full bg-white border !border-dashboardPrimary"
                type="fullname"
              ></Input>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <Label htmlFor="idRole">Role</Label>
              <div className="flex flex-wrap gap-5">
                <Radio
                  name="idRole"
                  control={control}
                  checked={watchRole === role.CUSTOMER}
                  value={role.CUSTOMER}
                  dashboard
                >
                  Customer
                </Radio>
                <Radio
                  name="idRole"
                  control={control}
                  checked={watchRole === role.ADMIN}
                  value={role.ADMIN}
                  dashboard
                >
                  Admin
                </Radio>
                <Radio
                  name="idRole"
                  control={control}
                  checked={watchRole === role.OPERATOR}
                  value={role.OPERATOR}
                  dashboard
                >
                  Operator
                </Radio>
                <Radio
                  name="idRole"
                  control={control}
                  checked={watchRole === role.SHIPPER}
                  value={role.SHIPPER}
                  dashboard
                >
                  Shipper
                </Radio>
                <Radio
                  name="idRole"
                  control={control}
                  checked={watchRole === role.CONTENT_CREATOR}
                  value={role.CONTENT_CREATOR}
                  dashboard
                >
                  Content Creator
                </Radio>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-5 lg:gap-10">
            <div className="flex-1 flex flex-col gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                control={control}
                name="password"
                placeholder="Please enter your password"
                className="w-[350px] lg:w-full "
                type="text"
                disabled
              ></Input>
            </div>
            <div className="flex-1 flex flex-col gap-3"></div>
          </div>
        </div>
        <div className="mt-10 lg:mt-[60px] flex justify-center">
          <Button isLoading={isSubmitting} type="submit" kind="dashboard">
            Create User
          </Button>
        </div>
      </form>
    </div>
  );
}
