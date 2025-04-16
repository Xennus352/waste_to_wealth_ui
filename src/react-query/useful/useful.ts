import { createUseful, getAllUseful } from "@/apis/useful/useful";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//get all useful
export const useGetAllUseful = (postId: string) => {
  return useQuery({
    queryKey: ["all-useful"],
    queryFn: () => getAllUseful(postId),
    refetchInterval: 1000,
  });
};

// create useful
export const useCreateUseful = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => createUseful(id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["all-useful"] });
      queryClient.refetchQueries({ queryKey: ["all-useful"] });
    },
  });
};
