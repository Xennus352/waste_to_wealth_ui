import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ChevronRight, Minus, Plus } from "lucide-react";
import { ProductType } from "@/types/ProductType";
import BuyButton from "../BuyButton";

const ProductCard = ({ product }: { product: ProductType }) => {
  const image =
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg";

  const [quantity, setQuantity] = useState<number>(1);

  // quantity control
  const productQuantity = () => {
    return (
      <div className=" flex items-center justify-evenly gap-1 flex-row">
        <Button
          variant={"outline"}
          className="cursor-pointer disabled:cursor-not-allowed disabled:bg-zinc-400"
          disabled={quantity == 1}
          onClick={() => {
            setQuantity(quantity - 1);
          }}
        >
          <Minus />
        </Button>
        <p className="p-2">{quantity}</p>
        <Button
          variant={"outline"}
          className="cursor-pointer disabled:cursor-not-allowed disabled:bg-zinc-400"
          disabled={quantity == Number(product.quantity)}
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          {" "}
          <Plus />
        </Button>
      </div>
    );
  };

  const totalPrice = (quantity * Number(product.price)).toString();

  return (
    <Card className="m-2 flex flex-col md:flex-row items-center p-4 space-y-4 md:space-y-0 md:space-x-4">
      <img
        src={product?.picture ? product?.picture :image}
        alt="Post"
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-lg font-bold">{product?.title}</h3>

        <p className="text-md text-gray-700 whitespace-pre-wrap">
          {product.description}
        </p>

        <p className="text-md text-gray-600 uppercase">{product.price}-MMK</p>
        <p className="text-sm text-gray-400 uppercase">#{product.type}</p>

        <p className="flex items-center gap-1 flex-row">
          Total Price <ChevronRight /> {totalPrice} MMK
        </p>
        <div className="flex space-x-2 mt-2 justify-end">
          <div className=" flex items-center flex-row gap-2">
            {productQuantity()}
            <BuyButton
              product={product}
              totalPrice={totalPrice}
              quantity={quantity.toString()}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
