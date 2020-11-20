export interface ProductGroupEdit {
  id: number;
  name: string;
  coverImage: string;
  city: string;
  price: number;
  borrowStartDate: Date;
  borrowEndDate: Date;
  productOwnerAccount: string;
  productOwnerName: string;
  contact: string;
  comment: number;
  productArray: Product[];
  bankAccount: string;
}

export interface Product {
  id: number;
  type: string;
  name: string;
  count: number;
  brand: string;
  appearance: string;
  useInformation: string;
  brokenCompensation: string;
  relatedLink: string;
  memo: string;
  imageArray: Image[];
}

export interface Image {
  id: number;
  url: string;
}
