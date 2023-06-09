import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  selectUserList,
  selectUserLoading,
  selectUserPagination,
  userAction,
} from 'features/user/userSlice';
import { Gender, ListParams, Role, User } from 'models';
import { useEffect, useRef, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { gender, role } from 'utils/constant';

export interface ManageUserProps {}

const genderList: Array<Gender> = [
  {
    id: '1',
    name: 'Male',
  },
  {
    id: '2',
    name: 'Female',
  },
  {
    id: '3',
    name: 'Other',
  },
];
const roleList: Array<Role> = [
  {
    id: '1',
    name: 'Customer',
  },
  {
    id: '3',
    name: 'Operator',
  },
  {
    id: '4',
    name: 'Shipper',
  },
  {
    id: '5',
    name: 'Content Creator',
  },
];

const USER_PER_PAGE = 4;

export function ManageUser(_: ManageUserProps) {
  const [currentGender, setCurrentGender] = useState<string>('All Gender');
  const [currentRole, setCurrentRole] = useState<string>('All Role');

  const [showGender, setShowGender] = useState<boolean>(false);
  const [showRole, setShowRole] = useState<boolean>(false);

  const [currentPage, setCurentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);

  const [params, setParams] = useState<ListParams>({
    page: currentPage,
    limit: USER_PER_PAGE,
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const pagination = useAppSelector(selectUserPagination);

  const users: Array<User> = useAppSelector(selectUserList);
  const loading = useAppSelector(selectUserLoading);

  useEffect(() => {
    (async () => {
      await dispatch(userAction.fetchUserList(params));
    })();
  }, []);

  const hanldeSearchUser: SubmitHandler<FieldValues> = async (e) => {
    e.preventDefault();
    if (inputRef.current) {
      const input = inputRef.current;
      await dispatch(userAction.fetchUserList({ ...params, keyWord: input.value }));
    }
  };

  useEffect(() => {
    if (pagination) {
      setTotalPage(Math.ceil(pagination._totalRows / USER_PER_PAGE));
    }
  }, [pagination]);

  useEffect(() => {
    async function fetchData() {
      await dispatch(userAction.fetchUserList({ ...params, page: currentPage }));
    }
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    async function fetchData() {
      await dispatch(userAction.fetchUserList(params));
    }
    fetchData();
  }, [params]);

  return (
    <div className="p-6 pr-12 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold leading-7">Manage Users</h1>
      <div className="flex justify-between">
        <div className="flex">
          <p className="font-semibold mt-1">Home {'>'} Manage Users</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center border-b border-b-[rgba(35,_35,_33,_0.2)] pb-4">
          <h2 className="font-bold text-xl">All Users</h2>
          <div className="flex gap-4">
            <Link
              to={'/dashboard/users/createUser'}
              className="px-3 bg-dashboardPrimary text-white flex justify-center items-center rounded-lg"
            >
              Create User
            </Link>
            <div
              onClick={() => setShowGender(!showGender)}
              className="relative flex justify-between items-center border border-dashboardPrimary rounded-lg px-2 cursor-pointer bg-white min-w-[146px]"
            >
              {currentGender}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
              <div
                className={`absolute ${
                  !showGender && 'hidden'
                } top-[100%] left-0 right-0 bg-white max-h-[200px] overflow-auto rounded-lg customScroll border border-dashboardPrimary`}
              >
                <div
                  onClick={() => {
                    setCurrentGender('All Gender');
                    setParams((prev) => {
                      const { idGender, ...rest } = prev;
                      return rest;
                    });
                  }}
                  className="py-2 hover:bg-dashboardPrimary hover:text-white text-center"
                >
                  All Gender
                </div>
                {genderList.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setCurrentGender(item.name);
                      setParams({ ...params, idGender: item.id });
                    }}
                    className="py-2 hover:bg-dashboardPrimary hover:text-white text-center"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            <div
              onClick={() => setShowRole(!showRole)}
              className="relative flex justify-between items-center border border-dashboardPrimary rounded-lg px-2 cursor-pointer bg-white min-w-[146px]"
            >
              {currentRole}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
              <div
                className={`absolute ${
                  !showRole && 'hidden'
                } top-[100%] left-0 right-0 bg-white max-h-[200px] overflow-auto rounded-lg customScroll border border-dashboardPrimary`}
              >
                <div
                  onClick={() => {
                    setCurrentRole('All Role');
                    setParams((prev) => {
                      const { idRole, ...rest } = prev;
                      return rest;
                    });
                  }}
                  className="py-2 hover:bg-dashboardPrimary hover:text-white text-center"
                >
                  All Role
                </div>
                {roleList.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setCurrentRole(item.name);
                      setParams({ ...params, idRole: item.id });
                    }}
                    className="py-2 hover:bg-dashboardPrimary hover:text-white text-center"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            <form onSubmit={hanldeSearchUser} className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Search"
                name="search"
                id="search"
                className="border border-dashboardSecondary py-1 px-2 rounded-lg h-10"
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
            users.map((user) => {
              return (
                <div key={user.username} className="flex justify-between items-center">
                  <div className="py-4 px-2 w-[100px]">
                    <p
                      className="font-bold text-dashboardPrimary text-center"
                      title={user.username}
                    >
                      {user.username.length > 12
                        ? user.username.slice(0, 12) + '...'
                        : user.username}
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
                    <p className="font-bold text-dashboardPrimary text-center">
                      {user.PhoneNumber}
                    </p>
                  </div>
                  <div className="py-4 px-2 w-[146px]">
                    <p className="font-bold text-dashboardPrimary text-center">
                      {user.DateOfBirth}
                    </p>
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
                  <div className="py-4 px-2 w-[120px] flex gap-2 justify-end">
                    <Link
                      to={`/dashboard/users/${user.username}`}
                      className="py-1 px-2 border border-[#888] rounded-lg"
                    >
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
                  </div>
                </div>
              );
            })}
          {!loading && users.length <= 0 && (
            <p className="text-center">There are no results matching this filter</p>
          )}
        </div>
      </div>
      {pagination && users.length > 0 && (
        <div className="flex items-center mx-auto bg-white border border-gray-400 rounded-lg">
          <div className="flex">
            <div
              className={`border border-gray3 rounded-l-lg h-10 w-11 flex items-center justify-center ${
                currentPage <= 1 ? 'text-gray5 bg-gray2' : 'cursor-pointer'
              }`}
              onClick={() => {
                if (currentPage > 1) {
                  setCurentPage(currentPage - 1);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            {new Array(totalPage).fill(0).map((_, index) => (
              <div
                key={index}
                className={`border border-gray3 h-10 w-11  flex items-center justify-center ${
                  currentPage === index + 1 ? 'text-gray5 bg-gray2' : 'cursor-pointer'
                }`}
                onClick={() => {
                  if (currentPage !== index + 1) {
                    setCurentPage(index + 1);
                  }
                }}
              >
                {index + 1}
              </div>
            ))}
            <div
              className={`border border-gray3 rounded-r-lg h-10 w-11 flex items-center justify-center ${
                currentPage >= totalPage || pagination?._totalRows <= USER_PER_PAGE
                  ? 'text-gray5 bg-gray2'
                  : 'cursor-pointer'
              }`}
              onClick={() => {
                if (currentPage < totalPage && pagination._totalRows > USER_PER_PAGE) {
                  setCurentPage(currentPage + 1);
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
