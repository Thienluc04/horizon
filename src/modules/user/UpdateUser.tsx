import userApi from 'api/userApi';
import { useAppDispatch } from 'app/hooks';
import { Button } from 'components/button';
import { Radio } from 'components/checkbox';
import { Label } from 'components/label';
import { userAction } from 'features/user/userSlice';
import { Profile, Response } from 'models';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { role, status } from 'utils/constant';

export interface UpdateUserProps {}

export function UpdateUser(_: UpdateUserProps) {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const [isCustomer, setIsCustomer] = useState<boolean>(false);

  const { slug } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (errors) {
      const error = Object.values(errors);
      const errorMessage: String | undefined = error[0]?.message?.toString();

      toast.error(errorMessage);
    }
  }, [errors]);

  useEffect(() => {
    (async () => {
      if (slug) {
        const response: Profile = await userApi.getProfile(slug);
        setValue('idRole', response?.idRole);
        if (response?.idRole === role.CUSTOMER) {
          setIsCustomer(true);
        }
      }
    })();
  }, []);

  const watchRole = watch('idRole');

  const handleChangeRoleUser: SubmitHandler<FieldValues> = async (values) => {
    try {
      if (slug && isValid) {
        await dispatch(userAction.fetchChangeRole({ username: slug, idRole: values.idRole }));
      }
    } catch (error) {}
  };

  const handleResetPass = async () => {
    if (slug) {
      await dispatch(userAction.fetchResetPass(slug));
    }
  };

  return (
    <div className="p-6 pr-12 flex flex-col gap-6 ">
      <h1 className="text-2xl font-semibold leading-7">User {slug}</h1>
      <div className="flex justify-between">
        <div className="flex">
          <p className="font-semibold mt-1">
            Home {'>'} Manage Users {'>'} Update User
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(handleChangeRoleUser)} className="flex-1">
        <div className="flex flex-col gap-5 lg:gap-10 lg:mt-10 mt-5 px-4">
          <div className="flex lg:flex-row flex-col items-end gap-5 lg:gap-10">
            {watchRole && !isCustomer && (
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
            )}
            <div className="flex-1 flex gap-2 items-center">
              <Button onClick={handleResetPass} kind="dashboardSecondary">
                Reset pass
              </Button>
              <span title='Password will be reset to "123456" '>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-[60px] flex justify-center">
          <Button isLoading={isSubmitting} type="submit" kind="dashboard">
            Update User
          </Button>
        </div>
      </form>
    </div>
  );
}
