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
import { useState } from "react";

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

  const [base64Image, setBase64Image] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result as string);
        // console.log("Base64 Image:", reader.result); // You can POST this to an API
      };
      reader.readAsDataURL(file); // This converts it to base64
    }
  };

  // form submition
  const handleOrderSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const file = formData.get("image") as File;

    const toBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
      });
    };

    const base64Image = file ? await toBase64(file) : null;
    try {
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
        cashTransferPhoto: base64Image,
        // product info
        marketId: product.id,
        quantity: quantity,
        price: totalPrice,
      };
      createOrder(order);
      navigate(`/app/cash-receipt/${product.id}`);
    } catch (error) {
      console.log("Error converting image to base64:", error);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          Check Details!
        </Button>
      </DrawerTrigger> 
      <DrawerContent className="bg-[#aeb6be]">
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
              <div className="p-4 rounded-md cursor-pointer border  flex md:h-70 lg:h-70 xl:h-70 items-center justify-center flex-grow">
                <label
                  htmlFor="postImg"
                  className={`${
                    base64Image ? "cursor-pointer hidden" : "cursor-pointer"
                  }`}
                >
                  Upload your cash transfer photo
                </label>
                <Input
                  name="image"
                  className="hidden"
                  id="postImg"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {base64Image && (
                  <img
                    src={base64Image}
                    alt="Preview"
                    className="mt-4 max-h-40 rounded"
                  />
                )}
              </div>
              <DrawerFooter>
                <Button type="submit" className="cursor-pointer">
                  buy
                </Button>
              </DrawerFooter>
            </div>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
