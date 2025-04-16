import {
  createPost,
  deletePost,
  getAllPosts,
  getSinglePost,
  updatePost,
} from "@/apis/posts/post";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//get all posts
export const useGetAllPosts = () => {
  return useQuery({
    queryKey: ["all-posts"],
    queryFn: getAllPosts,
    refetchInterval: 1000,
  });
};

// create post
export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { [key: string]: any }) => createPost(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["all-posts"] });
      queryClient.refetchQueries({ queryKey: ["all-posts"] });
    },
  });
};

// get single post
export const useGetSinglePost = (id: string) => {
  return useQuery({
    queryKey: ["single-post",id],
    queryFn: () => getSinglePost(id),
  });
};

// update post 
export const useUpdatePost = () => { 
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: { [key: string]: any; id: string }) =>
        updatePost(data),
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ["all-posts"] });
        queryClient.refetchQueries({ queryKey: ["all-posts"] });
      },
    });
  
 }

// delete post
export const useDeletePost = () => {
  return useMutation({
    mutationFn: (id: string) => deletePost(id),
  });
};
