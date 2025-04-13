import { ProductType } from "@/types/ProductType";
import { Unplug } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCard from "../cards/ProductCard";
import { useGetAllProducts } from "@/react-query/market/market";

const ProductContainer = () => {
  const { data: products, isLoading, isError } = useGetAllProducts();
  // handle loading state
  if (isLoading) {
    return (
      <>
        <div className="flex flex-col items-center justify-center md:flex-row gap-3 space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2 p-2 md:p-5">
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row gap-3 space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2 p-2 md:p-5">
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row gap-3 space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2 p-2 md:p-5">
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
          </div>
        </div>
      </>
    );
  }

  // handle error
  if (isError) {
    return (
      <div className="text-destructive h-44 text-center text-3xl flex flex-col items-center justify-center gap-3">
        <p>Something went wrong while getting products!</p>
        <div>
          <Unplug size={50} />
        </div>
      </div>
    );
  }

  // checking approve
  // const approvedPosts = products?.filter(
  //   (product: PostType) => product.isApproved == true
  // );

  // show data without approve
  return (
    <div>
      {products?.map((product: ProductType) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductContainer;
