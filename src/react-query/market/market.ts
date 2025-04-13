import { createProduct, getAllProducts } from "@/apis/market/market";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//get all products
export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["all-products"],
    queryFn: getAllProducts,
    refetchInterval: 10000,
    staleTime: 5000,
  });
};

// create product
export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { [key: string]: any }) => createProduct(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["all-products"] });
      queryClient.refetchQueries({ queryKey: ["all-products"] });
    },
  });
};
