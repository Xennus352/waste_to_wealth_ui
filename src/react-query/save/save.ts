import { createSave, getAllSave } from "@/apis/save/save";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//get all save
export const useGetAllSave = (postId: string) => {
  return useQuery({
    queryKey: ["all-save"],
    queryFn: () => getAllSave(postId),
    refetchInterval: 10000,
  });
};

// create save
export const useCreateSave = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => createSave(id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["all-save"] });
      queryClient.refetchQueries({ queryKey: ["all-save"] });
    },
  });
};
