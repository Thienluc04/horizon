export interface SpeProduct {
  CpuName: string;
  RamName: string;
  DiskName: string;
  VgaName: string;
  ScreenName: string;
  ColorName: string;
  OsName: string;
}

export interface Product {
  idProduct: string;
  Category: string;
  TradeMark: string;
  NameProduct: string;
  Slug: string;
  CurrentPrice: string;
  image: string;
  Specifications: SpeProduct;
}

export interface ProductInput {
  idProduct?: string;
  idCategoryInput?: string;
  IDTradeMarkInput?: string;
  IdSpecificationsInput?: string;
  NameInput: string;
  SlugInput: string;
  CurrentPriceInput: string;
  OldPriceInput?: string;
  dateDiscountInput?: string;
  urlImageProductInput: string;
}

export interface FilterProduct {
  idStatusProduct: string;
  idCategoryInput: string;
  IDTradeMarkInput: string;
}
