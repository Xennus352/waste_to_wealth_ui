import { UserType } from "./PostType";

export interface ProductType {
  id: string;
  title: string;
  description: string;
  price: string;
  quantity: string;
  type: string;
  picture: string;
  totalPrice?: string;
  User: UserType;
  createdAt: Date;
  updatedAt: Date;
}
