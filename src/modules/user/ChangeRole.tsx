import userApi from 'api/userApi';
import { useAppDispatch } from 'app/hooks';
import { Button } from 'components/button';
import { Radio } from 'components/checkbox';
import { Label } from 'components/label';
import { userAction } from 'features/user/userSlice';
import { Profile, Response } from 'models';
import { useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { role } from 'utils/constant';

export interface ChangeRoleProps {}

export function ChangeRole(_: ChangeRoleProps) {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: 'onSubmit',
  });

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
        const { data }: Response<Profile> = await userApi.getProfile(slug);
        setValue('idRole', data.idRole);
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

  return (
    <div className="p-6 pr-12 flex flex-col gap-6 border-l border-l-[rgba(35,_35,_33,_0.2)]">
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
          <div className="flex lg:flex-row flex-col items-center gap-5 lg:gap-10">
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
        </div>
        <div className="mt-10 lg:mt-[60px] flex justify-center">
          <Button isLoading={isSubmitting} type="submit" kind="dashboard">
            Update Role
          </Button>
        </div>
      </form>
    </div>
  );
}
