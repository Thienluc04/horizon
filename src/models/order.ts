export interface BookingDetail {
  idProduct: string;
  amount: number;
  totalPriceOfProduct: string;
}

export interface OrderInput {
  idUserIput: number;
  idStatusBookingInput: number;
  nameOfBuyerInput: string;
  addressOfBuyerInput: string;
  phoneNumberOfBuyerInput: string;
  emailOfBuyerInput: string;
  TotalMoneyBillInput: string;
  NoteInput: string;
  dateBooking: string;
  arrayBookingDetail: BookingDetail[];
}

export interface Order {
  ID: string;
  nameStatus: string;
  nameOfBuyer: string;
  dateBooking: string;
  TotalMoneyBill: string;
}
