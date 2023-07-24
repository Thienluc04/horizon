import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Button } from 'components/button';
import { authAction, selectCurrentUser } from 'features/auth/authSlice';
import { cartActions, selectListCart } from 'features/cart/cartSlice';
import { productAction, selectParamsProduct } from 'features/product/productSlice';
import { Cart } from 'models';
import { FormEvent, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navigation } from '.';

export interface HeaderProps {}

export function Header({}: HeaderProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [cookies, , removeCookie] = useCookies(['currentUser']);

  const currentUser = useAppSelector(selectCurrentUser);

  const params = useAppSelector(selectParamsProduct);
  const listCart = useAppSelector(selectListCart);

  useEffect(() => {
    if (listCart.length > 0) {
      localStorage.setItem('my_cart', JSON.stringify(listCart));
    }
  }, [listCart]);

  useEffect(() => {
    if (cookies.currentUser) {
      dispatch(authAction.authLoginSuccess(cookies.currentUser));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('my_cart')) {
      const mycart: Cart[] = Array.from(JSON.parse(String(localStorage.getItem('my_cart'))));
      if (mycart) {
        dispatch(cartActions.setListCart(mycart));
      }
    }
  }, []);

  const hanldeOpenMenu = () => {
    if (menuRef.current && labelRef.current) {
      const menu = menuRef.current;
      const label = labelRef.current;
      menu?.classList.remove('hideMenu');
      label.classList.remove('hideOverlay');
      menu?.classList.add('showMenu');
      label.classList.add('showOverlay');
      document.body.classList.add('overflow-hidden');
    }
  };

  const handleCloseMenu = () => {
    if (menuRef.current && labelRef.current) {
      const menu = menuRef.current;
      const label = labelRef.current;
      menu?.classList.remove('showMenu');
      label.classList.remove('showOverlay');
      menu?.classList.add('hideMenu');
      label.classList.add('hideOverlay');
      document.body.classList.remove('overflow-hidden');
    }
  };

  const hanldeSubmitSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputRef.current;
    if (params) {
      await dispatch(productAction.fetchProductList({ ...params, keyWord: input?.value }));
      navigate('/products');
    }
  };

  const handleLogOut = async () => {
    dispatch(authAction.authLogOut());
    removeCookie('currentUser');
    navigate('/');
  };

  const handleShowDropMenu = async () => {
    const dropdown = dropdownRef.current;

    dropdown?.classList.toggle('hidden');
  };

  return (
    <>
      {/* Mobile */}
      <div
        ref={menuRef}
        className="fixed xl:hidden top-0 left-0 bottom-0 w-[300px] bg-white z-10 hideMenu"
      >
        <div className="flex flex-col p-5">
          <div className="border-b border-primary py-3 w-full flex justify-between">
            {currentUser ? (
              <p>Hello {currentUser.username}</p>
            ) : (
              <div className="flex gap-3">
                <Link to={'/login'} className="text-primary">
                  Login
                </Link>
                <Link to={'/register'} className="text-dark">
                  Register
                </Link>
              </div>
            )}
            <span className="text-primary block ml-auto" onClick={handleCloseMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </div>
          <div className="mt-5">
            <div className=" py-3 w-full">
              <Link
                to={'/'}
                className={`flex gap-3 items-center ${
                  location.pathname === '/' ? 'text-primary' : 'text-[#8b96a5]'
                }`}
              >
                <span>
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3.19L15 7.69V15.5H13V9.5H7V15.5H5V7.69L10 3.19ZM10 0.5L0 9.5H3V17.5H9V11.5H11V17.5H17V9.5H20L10 0.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                Home
              </Link>
            </div>
            <div className=" py-3 w-full">
              <Link
                to={'/products'}
                className={`flex gap-3 items-center ${
                  location.pathname.includes('products') ? 'text-primary' : 'text-[#8b96a5]'
                }`}
              >
                <span>
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 6.5C1.42 6.5 0.75 7.17 0.75 8C0.75 8.83 1.42 9.5 2.25 9.5C3.08 9.5 3.75 8.83 3.75 8C3.75 7.17 3.08 6.5 2.25 6.5ZM2.25 0.5C1.42 0.5 0.75 1.17 0.75 2C0.75 2.83 1.42 3.5 2.25 3.5C3.08 3.5 3.75 2.83 3.75 2C3.75 1.17 3.08 0.5 2.25 0.5ZM2.25 12.5C1.42 12.5 0.75 13.18 0.75 14C0.75 14.82 1.43 15.5 2.25 15.5C3.07 15.5 3.75 14.82 3.75 14C3.75 13.18 3.08 12.5 2.25 12.5ZM5.25 15H19.25V13H5.25V15ZM5.25 9H19.25V7H5.25V9ZM5.25 1V3H19.25V1H5.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                Products
              </Link>
            </div>
            <div className=" py-3 w-full">
              <Link
                to={'/cart'}
                className={`flex gap-3 items-center ${
                  location.pathname.includes('cart') ? 'text-primary' : 'text-[#8b96a5]'
                }`}
              >
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
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </span>
                My cart
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={labelRef}
        onClick={handleCloseMenu}
        className=" absolute inset-0 bg-dark z-[5] hideOverlay"
      ></div>

      <div className="max-w-[1180px] mx-auto flex justify-between items-center py-3 max-lg:px-5">
        <div className="flex items-center gap-2">
          <div className="xl:hidden" onClick={hanldeOpenMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <Link to={'/'}>
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <div className=" h-10 xl:flex">
          <form onSubmit={(e) => hanldeSubmitSearch(e)} className="xl:flex hidden">
            <input
              type="text"
              className="min-w-[420px] h-full border-2 border-primary rounded-lg border-r-[1px] rounded-r-none p-2"
              placeholder="Search"
              ref={inputRef}
            />

            <button className="bg-primaryGradient px-6 text-white rounded-r-lg" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="flex items-center gap-3">
          <Link to={'/cart'} className="flex flex-col items-center gap-1 relative">
            <div className="absolute top-[-15%] right-0 min-w-[16px] h-4 p-1 rounded-lg text-xs bg-red text-white flex justify-center items-center">
              {listCart.length}
            </div>
            <img src="/images/cart-icon.svg" alt="" />
            <p className="text-gray5 text-xs">My cart</p>
          </Link>
          {currentUser ? (
            <>
              <div className="relative cursor-pointer" onClick={handleShowDropMenu}>
                <div className="flex items-center">
                  <Link to={'/profile'} className="flex flex-col items-center gap-1 relative">
                    <img
                      src={`${
                        currentUser.urlAvata.length > 0
                          ? currentUser.urlAvata
                          : '/profile_default.png'
                      }`}
                      className="rounded-full w-[22px] h-[22px]"
                      alt=""
                    />
                    <p className="text-gray5 text-xs">{currentUser.username}</p>
                  </Link>
                </div>
              </div>

              <div
                onClick={() => handleLogOut()}
                className="cursor-pointer flex flex-col items-center gap-1"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="#8B96A5"
                  >
                    <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
                    <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
                  </svg>
                </span>
                <p className="text-gray5 text-xs">Log out</p>
              </div>
            </>
          ) : (
            <>
              <Button to="/login">Login</Button>
              <Button to="/register" kind="secondary">
                Register
              </Button>
            </>
          )}
        </div>
      </div>

      <Navigation></Navigation>
    </>
  );
}
