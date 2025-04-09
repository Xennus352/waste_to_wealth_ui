import { createLike, getAllLikes } from "@/apis/like/like";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//get all likes
export const useGetAllLikes = (postId: string) => {
  return useQuery({
    queryKey: ["all-likes", postId],
    queryFn: () => getAllLikes(postId),
    refetchInterval: 10000,
  });
};

// create like
export const useCreateLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => createLike(id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["all-likes"] });
      queryClient.refetchQueries({ queryKey: ["all-likes"] });
    },
  });
};
