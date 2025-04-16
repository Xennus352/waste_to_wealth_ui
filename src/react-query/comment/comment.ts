import { createComment, getAllComments } from "@/apis/comment/comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//get all comments
export const useGetAllComments = (id: string) => {
  return useQuery({
    queryKey: ["all-comments"],
    queryFn: () => getAllComments(id),
    refetchInterval: 1000,
  });
};

// create comment
export const useCreateCommet = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { [key: string]: any }) => createComment(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["all-comments"] });
      queryClient.refetchQueries({ queryKey: ["all-comments"] });
    },
  });
};
