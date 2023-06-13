import { orderApi } from 'api/orderApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Button } from 'components/button';
import { CartItem } from 'components/cart/CartItem';
import { ListCartItem } from 'components/cart/ListCartItem';
import { cartActions, selectListCart } from 'features/cart/cartSlice';
import { BookingDetail } from 'models/order';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { status, statusBooking } from 'utils/constant';

export default function CartPage() {
  const cartList = useAppSelector(selectListCart);
  const [totalBill, setTotalBill] = useState<number>(0);
  const [arrayBooking, setArrayBooking] = useState<BookingDetail[]>([]);
  const [address, setAddress] = useState<string>('');
  const [note, setNote] = useState<string>('');

  const dispatch = useAppDispatch();

  const [cookies] = useCookies(['currentUser']);
  const currentUser = cookies.currentUser;

  useEffect(() => {
    if (cartList.length > 0) {
      const total = cartList.reduce((prev, current) => prev + Number(current.price), 0);
      setTotalBill(total);
    }
  }, [cartList]);

  const handleRemoveCartAll = () => {
    dispatch(cartActions.setListCart([]));
    setTotalBill(0);
    localStorage.removeItem('my_cart');
    setNote('');
    setAddress('');
  };

  useEffect(() => {
    if (cartList.length > 0) {
      const array: BookingDetail[] = [];
      cartList.forEach((item) => {
        array.push({
          idProduct: String(item.id),
          amount: String(item.quantity),
          totalPriceOfProduct: item.price,
        });
      });
      setArrayBooking(array);
    }
  }, [cartList]);

  const handleCheckoutBill = async () => {
    if (currentUser) {
      if (cartList.length > 0 && arrayBooking.length > 0) {
        if (note.length > 0 && address.length > 0) {
          const dateNow = new Date().toISOString().split('T')[0];
          const response = await orderApi.insertOrder({
            idUserInput: currentUser.ID,
            idStatusBookingInput: statusBooking.PAID,
            nameOfBuyerInput: currentUser.username,
            addressOfBuyerInput: address,
            phoneNumberOfBuyerInput: currentUser.PhoneNumber,
            emailOfBuyerInput: currentUser.email,
            TotalMoneyBillInput: totalBill.toString(),
            NoteInput: note,
            dateBooking: dateNow,
            arrayBookingDetail: arrayBooking,
          });

          if (response === status.OK) {
            toast.success('Checkout success!');
            handleRemoveCartAll();
          } else {
            toast.error('Something went wrong');
          }
        } else {
          toast.warning('You are not entered note or address');
        }
      }
    } else {
      toast.error('You are not logged in!');
    }
  };

  return (
    <>
      <div className="bg-[#F7FAFC]">
        <div className="max-w-[1180px] mx-auto py-10 max-lg:px-3">
          <h1 className="text-2xl leading-8 text-dark">My cart ({cartList.length})</h1>
          <div className="flex gap-5 mt-6 max-lg:flex-col">
            <div className="w-[880px] p-5 border border-gray3 rounded-md flex flex-col justify-between bg-white max-lg:w-full">
              <div>
                <ListCartItem>
                  {cartList?.map((item) => (
                    <CartItem
                      key={item.id}
                      cart={item}
                      onRemoveAll={handleRemoveCartAll}
                    ></CartItem>
                  ))}
                </ListCartItem>
                {cartList.length <= 0 && (
                  <div className="flex flex-col items-center justify-center gap-5 mt-5">
                    <img src="/images/empty-cart.png" alt="" />
                    <p className="text-center">You have no products in your cart</p>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center mt-5">
                <Button to="/products" className="flex gap-2">
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3332 7.08329H4.17734L9.3015 1.95913L7.99984 0.666626L0.666504 7.99996L7.99984 15.3333L9.29234 14.0408L4.17734 8.91663H15.3332V7.08329Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Back to shop
                </Button>
                <Button onClick={handleRemoveCartAll} kind="secondary">
                  Remove all
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="p-4 bg-white border border-gray3 rounded-md shadow-lg">
                <div className="flex justify-between pb-5 border-b border-b-gray3">
                  <p className="text-dark font-semibold">Total:</p>
                  <p className="text-xl leading-7 text-dark font-semibold">
                    {totalBill.toLocaleString('it-IT', {
                      style: 'currency',
                      currency: 'VND',
                    })}
                  </p>
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="border border-gray3 rounded-lg p-3 w-full"
                    placeholder="Enter the address"
                  />
                </div>
                <div className="mt-5">
                  <textarea
                    placeholder="Note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="border border-gray3 rounded-lg p-3 w-full min-h-[100px]"
                  ></textarea>
                </div>
                <button
                  onClick={handleCheckoutBill}
                  className="text-white bg-[#00B517] py-4 rounded-lg w-full mt-5"
                >
                  Checkout
                </button>
                <div className="mt-5 flex justify-center items-center gap-2">
                  <img src="/images/american-pay.png" alt="" />
                  <img src="/images/mastercard-pay.png" alt="" />
                  <img src="/images/paypal-pay.png" alt="" />
                  <img src="/images/visa-pay.png" alt="" />
                  <img src="/images/apple-pay.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="xl:flex hidden justify-between mt-7 max-w-[880px] ">
            <div className="flex gap-3">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-gray3">
                <span>
                  <svg
                    width={16}
                    height={21}
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM5 7V5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7H5Z"
                      fill="#8B96A5"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-dark">Secure payment</p>
                <p className="text-gray4">Have you ever finally just</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-gray3">
                <span>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM5 7H15C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9H5C4.45 9 4 8.55 4 8C4 7.45 4.45 7 5 7ZM11 12H5C4.45 12 4 11.55 4 11C4 10.45 4.45 10 5 10H11C11.55 10 12 10.45 12 11C12 11.55 11.55 12 11 12ZM15 6H5C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4H15C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6Z"
                      fill="#8B96A5"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-dark">Customer support</p>
                <p className="text-gray4">Have you ever finally just</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex justify-center items-center h-12 w-12 rounded-full bg-gray3">
                <span>
                  <svg
                    width={22}
                    height={16}
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.5 4H16V2C16 0.9 15.1 0 14 0H2C0.9 0 0 0.9 0 2V11C0 12.1 0.9 13 2 13C2 14.66 3.34 16 5 16C6.66 16 8 14.66 8 13H14C14 14.66 15.34 16 17 16C18.66 16 20 14.66 20 13H21C21.55 13 22 12.55 22 12V8.67C22 8.24 21.86 7.82 21.6 7.47L19.3 4.4C19.11 4.15 18.81 4 18.5 4ZM5 14C4.45 14 4 13.55 4 13C4 12.45 4.45 12 5 12C5.55 12 6 12.45 6 13C6 13.55 5.55 14 5 14ZM18.5 5.5L20.46 8H16V5.5H18.5ZM17 14C16.45 14 16 13.55 16 13C16 12.45 16.45 12 17 12C17.55 12 18 12.45 18 13C18 13.55 17.55 14 17 14Z"
                      fill="#8B96A5"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-dark">Free delivery</p>
                <p className="text-gray4">Have you ever finally just</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
