import {
  createFeedback,
  deleteFeedback,
  getAllFeedbacks,
} from "@/apis/contact/contact";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//get all feedbacks
export const useGetAllFeedbacks = () => {
  return useQuery({
    queryKey: ["all-feedbacks"],
    queryFn: getAllFeedbacks,
    refetchInterval: 1000,
  
  });
};

// create feedback
export const useCreateFeedback = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { [key: string]: any }) => createFeedback(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["all-feedbacks"] });
      queryClient.refetchQueries({ queryKey: ["all-feedbacks"] });
    },
  });
};

// delete feedback
export const useDeleteFeedback = () => {
  return useMutation({
    mutationFn: (id: string) => deleteFeedback(id),
  });
};
