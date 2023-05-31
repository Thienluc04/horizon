import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectUserList, selectUserLoading, userAction } from 'features/user/userSlice';
import { Gender, Role, User } from 'models';
import { useEffect, useRef, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { gender, role } from 'utils/constant';

export interface ManageUserProps {}

const genderList: Array<Gender> = [
  {
    id: 1,
    name: 'Male',
  },
  {
    id: 2,
    name: 'Female',
  },
  {
    id: 3,
    name: 'Other',
  },
];
const roleList: Array<Role> = [
  {
    id: 1,
    name: 'Customer',
  },
  {
    id: 3,
    name: 'Operator',
  },
  {
    id: 4,
    name: 'Shipper',
  },
  {
    id: 5,
    name: 'Content Creator',
  },
];

export function ManageUser(_: ManageUserProps) {
  const [currentGender, setCurrentGender] = useState<string>('');
  const [currentRole, setCurrentRole] = useState<string>('');

  const inputRef = useRef(null);

  const dispatch = useAppDispatch();

  const users: Array<User> = useAppSelector(selectUserList);
  const loading = useAppSelector(selectUserLoading);

  useEffect(() => {
    (async () => {
      await dispatch(userAction.fetchUserList());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (currentGender.length > 0 && currentGender !== 'All Gender') {
        await dispatch(userAction.getUserWithGender(currentGender));
      } else if (currentGender === 'All Gender') {
        await dispatch(userAction.fetchUserList());
      }
    })();
  }, [currentGender]);

  useEffect(() => {
    (async () => {
      if (currentRole.length > 0 && currentRole !== 'All Role') {
        await dispatch(userAction.getUserWithRole(currentRole));
      } else if (currentRole === 'All Role') {
        await dispatch(userAction.fetchUserList());
      }
    })();
  }, [currentRole]);

  const hanldeSearchUser: SubmitHandler<FieldValues> = async (e) => {
    e.preventDefault();
    if (inputRef.current) {
      const input: any = inputRef.current;
      await dispatch(userAction.searchUser(input.value));
    }
  };

  return (
    <div className="bg-[#E7E7E3] p-6 pr-12 flex flex-col gap-6 border-l border-l-[rgba(35,_35,_33,_0.2)]">
      <h1 className="text-2xl font-semibold leading-7">Manage Users</h1>
      <div className="flex justify-between">
        <div className="flex">
          <p className="font-semibold mt-1">Home {'>'} Manage Users</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 mb-[100px]">
        <div className="flex justify-between items-center border-b border-b-[rgba(35,_35,_33,_0.2)] pb-4">
          <h2 className="font-bold text-xl">All Users</h2>
          <div className="flex gap-4">
            <Link
              to={'/dashboard/createUser'}
              className="px-3 bg-dashboardPrimary text-white flex justify-center items-center rounded-lg"
            >
              Create User
            </Link>
            <select
              onChange={(e) => setCurrentGender(e.target.value)}
              name="gender"
              id="gender"
              className="border border-dashboardPrimary rounded-lg px-2 cursor-pointer"
            >
              <option>All Gender</option>
              {genderList.map((item) => (
                <option key={item.id} value={`${item.id}`}>
                  {item.name}
                </option>
              ))}
            </select>
            <select
              onChange={(e) => setCurrentRole(e.target.value)}
              name="role"
              id="role"
              className="border border-dashboardPrimary rounded-lg px-2 cursor-pointer"
            >
              <option>All Role</option>
              {roleList.map((item) => (
                <option key={item.id} value={`${item.id}`}>
                  {item.name}
                </option>
              ))}
            </select>
            <form onSubmit={hanldeSearchUser} className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Search"
                name="search"
                id="search"
                className="border border-gray-400 py-1 px-2 rounded-lg h-10"
                ref={inputRef}
              />
              <button
                type="submit"
                className="bg-dashboardSecondary text-white rounded-lg py-2 px-3 flex items-center gap-2"
              >
                Search
                <span>
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
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="py-4 px-2 w-[100px]">
              <p className="font-bold text-[#232321CC] text-center">Username</p>
            </div>
            <div className="py-4 px-2 w-[170px]">
              <p className="font-bold text-[#232321CC] text-center">Full Name</p>
            </div>
            <div className="py-4 px-2 w-[160px]">
              <p className="font-bold text-[#232321CC] text-center">Email</p>
            </div>
            <div className="py-4 px-2 w-[144px]">
              <p className="font-bold text-[#232321CC] text-center">Phone Number</p>
            </div>
            <div className="py-4 px-2 w-[146px]">
              <p className="font-bold text-[#232321CC] text-center">DateOfBirth</p>
            </div>
            <div className="py-4 px-2 w-[100px]">
              <p className="font-bold text-[#232321CC] text-center">Gender</p>
            </div>
            <div className="py-4 px-2 w-[100px]">
              <p className="font-bold text-[#232321CC] text-center">Role</p>
            </div>
            <div className="py-4 px-2 w-[120px]">
              <p className="font-bold text-[#232321CC] text-center">Actions</p>
            </div>
          </div>
          {loading && (
            <div className="w-10 h-10 border-2 border-dashboardSecondary border-t-transparent rounded-full animate-spin mx-auto"></div>
          )}
          {!loading &&
            users.map((user) => (
              <div key={user.username} className="flex justify-between items-center">
                <div className="py-4 px-2 w-[100px]">
                  <p className="font-bold text-dashboardPrimary text-center" title={user.username}>
                    {user.username.length > 12 ? user.username.slice(0, 12) + '...' : user.username}
                  </p>
                </div>
                <div className="py-4 px-2 w-[170px]">
                  <p className="font-bold text-dashboardPrimary text-center">{user.fullname}</p>
                </div>
                <div className="py-4 px-2 w-[160px]">
                  <p className="font-bold text-dashboardPrimary text-center" title={user.email}>
                    {user.email.length > 12 ? user.email.slice(0, 12) + '...' : user.email}
                  </p>
                </div>
                <div className="py-4 px-2 w-[144px]">
                  <p className="font-bold text-dashboardPrimary text-center">{user.PhoneNumber}</p>
                </div>
                <div className="py-4 px-2 w-[146px]">
                  <p className="font-bold text-dashboardPrimary text-center">{user.DateOfBirth}</p>
                </div>
                <div className="py-4 px-2 w-[100px]">
                  <p className="font-bold text-dashboardPrimary text-center">
                    {user.idGender === gender.MALE
                      ? 'Male'
                      : user.idGender === gender.FEMALE
                      ? 'Female'
                      : 'Other'}
                  </p>
                </div>
                <div className="py-4 px-2 w-[100px]">
                  <p className="font-bold text-dashboardPrimary text-center">
                    {user.idRole === role.OPERATOR
                      ? 'Operator'
                      : user.idRole === role.CUSTOMER
                      ? 'Customer'
                      : user.idRole === role.SHIPPER
                      ? 'Shipper'
                      : user.idRole === role.CONTENT_CREATOR
                      ? 'Content Creator'
                      : 'Admin'}
                  </p>
                </div>
                <div className="py-4 px-2 w-[120px] flex gap-2">
                  <Link to={''} className="py-1 px-2 border border-[#888] rounded-lg">
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
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>
                  <span className="py-1 px-2 border border-[#888] rounded-lg cursor-pointer">
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          {!loading && users.length <= 0 && (
            <p className="text-center">There are no results matching this filter</p>
          )}
        </div>
      </div>
    </div>
  );
}
