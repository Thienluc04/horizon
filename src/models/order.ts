export interface BookingDetail {
  idProduct?: string;
  amount: string;
  totalPriceOfProduct: string;
  ID?: string;
  nameProduct?: string;
  urlImage?: string;
}

export interface OrderInput {
  idBooking?: string;
  idStatusBooking?: string;
  idUserInput?: number;
  idStatusBookingInput?: number;
  nameOfBuyerInput?: string;
  addressOfBuyerInput?: string;
  phoneNumberOfBuyerInput?: string;
  emailOfBuyerInput?: string;
  TotalMoneyBillInput?: string;
  NoteInput?: string;
  dateBooking?: string;
  arrayBookingDetail?: BookingDetail[];
}

export interface Order {
  ID: string;
  nameStatus: string;
  nameOfBuyer: string;
  dateBooking: string;
  TotalMoneyBill: string;
}

export interface OrderDetailData {
  BookingDetail: BookingDetail[];
  Booking: Order;
}

export interface StatusBooking {
  ID: string;
  nameStatus: string;
}
