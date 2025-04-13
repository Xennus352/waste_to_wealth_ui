import { createOrder, getAllOrders } from "@/apis/order/order";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//get all order
export const useGetAllOrder = () => {
  return useQuery({
    queryKey: ["all-order"],
    queryFn: () => getAllOrders(),
    refetchInterval: 1000,
  });
};

// create order
export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { [key: string]: any }) => createOrder(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["all-order"] });
      queryClient.refetchQueries({ queryKey: ["all-order"] });
      
    },
  });
};
