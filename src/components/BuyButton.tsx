import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "./ui/input";
import { ProductType } from "@/types/ProductType";
import { useGetCurrentUser } from "@/react-query/user/user";
import { useCreateOrder } from "@/react-query/order/order";
import { useNavigate } from "react-router-dom";

export default function BuyButton({
  product,
  quantity,
  totalPrice,
}: {
  product: ProductType;
  quantity: ProductType["quantity"];
  totalPrice: ProductType["totalPrice"];
}) {
  // create order
  const { mutate: createOrder } = useCreateOrder();
  const navigate = useNavigate();

  // get current user data
  const { data: currentUserData } = useGetCurrentUser();

  // form submition
  const handleOrderSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const order = {
      // seller info
      productOwnerName: product.User.name,
      productOwnerPhone: product.User.PhoneNumber,
      productOwnerAddress: product.User.address,
      // buyer info
      userId: formData.get("buyerId"),
      name: formData.get("buyerName"),
      buyerPhone: formData.get("buyerPhone"),
      buyerAddress: formData.get("buyerAddress"),
      cashTransferPhoto: "",
      // product info
      marketId: product.id,
      quantity: quantity,
      price: totalPrice,
    };
    createOrder(order);
    navigate(`/app/cash-receipt/${product.id}`);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          Check Details!
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-slate-500 ">
        <div className="w-full">
          <form
            className="flex flex-col gap-2 m-2 md:flex-row md:justify-evenly lg:flex-row lg:justify-evenly xl:flex-row xl:justify-evenly"
            onSubmit={handleOrderSubmit}
          >
            <DrawerHeader>
              <DrawerTitle>Product Name : {product.title}</DrawerTitle>
              <DrawerTitle>Seller Name :{product.User.name}</DrawerTitle>
              <DrawerTitle>Seller Address :{product.User.address}</DrawerTitle>
              <DrawerTitle>
                Seller Phone :{" "}
                <span className=" select-text">
                  {" "}
                  {product.User.PhoneNumber}
                </span>
              </DrawerTitle>
              <DrawerDescription className="text-black italic">
                Write that{" "}
                <span className="font-bold select-text">"{product.title}"</span>{" "}
                in your KBZ Pay note!!
              </DrawerDescription>
            </DrawerHeader>

            <div className="flex  flex-col gap-2">
              <Input
                type="hidden"
                defaultValue={currentUserData?.id}
                name="buyerId"
                className="text-black placeholder:text-black"
                placeholder="Name"
              />
              <Input
                type="text"
                defaultValue={currentUserData?.name}
                name="buyerName"
                className="text-black placeholder:text-black"
                placeholder="Name"
              />
              <Input
                type="text"
                defaultValue={currentUserData?.PhoneNumber}
                name="buyerPhone"
                required
                className="text-black placeholder:text-black"
                placeholder="Phone number"
              />
              <Input
                type="text"
                defaultValue={currentUserData?.address}
                name="buyerAddress"
                required
                className="text-black placeholder:text-black"
                placeholder="Address"
              />
              <Input
                type="file"
                name="cashPhoto"
                required
                className="text-black placeholder:text-black"
              />
              <DrawerFooter>
                <Button type="submit" className="cursor-pointer">
                  buy
                </Button>
                {/* <DrawerClose asChild>
                  <Button className="cursor-pointer" variant="outline">
                    Cancel
                  </Button>
                </DrawerClose> */}
              </DrawerFooter>
            </div>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
