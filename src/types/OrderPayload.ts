import { UserType } from "./PostType";
import { ProductType } from "./ProductType";

export type OrderPayload = {
  productOwnerName?: string;
  productOwnerPhone?: string;
  productOwnerAddress?: string;

  id: string;
  name?: string;
  buyerPhone?: string;
  buyerAddress?: string;
  cashTransferPhoto?: string;

  marketId?: string;
  quantity?: string;
  price?: string;
  currentDate?: Date;
  User: UserType;
  Market: ProductType;
};
