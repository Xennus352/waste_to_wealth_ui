import { createPost, getAllPosts } from "@/apis/posts/post";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//get all posts
export const useGetAllPosts = () => {
  return useQuery({
    queryKey: ["all-posts"],
    queryFn: getAllPosts,
    refetchInterval: 10000,
    staleTime: 5000,
  });
};

// create post
export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { [key: string]: any; }) => createPost(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["all-posts"] });
      queryClient.refetchQueries({ queryKey: ["all-posts"] });
    },
  });
};
