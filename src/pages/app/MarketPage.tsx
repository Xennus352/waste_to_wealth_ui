import { CreateProductModel } from "@/components/model/CreateProductModel";

import ProductContainer from "@/components/post/ProductContainer";
import { Separator } from "@/components/ui/separator";

const MarketPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between m-2">
        <div className="font-bold text-2xl text-slate-500">Market!</div>
        <div>
          <CreateProductModel classname="md:min-w-3xl lg:min-w-4xl xl:min-w-4xl" />
        </div>
      </div>

      <Separator />
      {/* display all confirmed posts  */}
      <ProductContainer />
    </div>
  );
};

export default MarketPage;
