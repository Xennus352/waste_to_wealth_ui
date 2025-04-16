import {
  createGuide,
  deleteGuide,
  getAllGuides,
  getSingleGuide,
  updateGuide,
} from "@/apis/handmade/handmade";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//get all guides
export const useGetAllGuides = () => {
  return useQuery({
    queryKey: ["all-guides"],
    queryFn: getAllGuides,
    refetchInterval: 1000,
  });
};

//get single guide
export const useGetSingleGuide = (id: string) => {return useQuery({
    queryKey: ["single-guide",id],
    queryFn: () => getSingleGuide(id),
  });};

// create guide
export const useCreateGuide = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { [key: string]: any }) => createGuide(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["all-guides"] });
      queryClient.refetchQueries({ queryKey: ["all-guides"] });
    },
  });
};

// update guide
export const useUpdateGuide = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { [key: string]: any; id: string }) => updateGuide(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["all-guides"] });
      queryClient.refetchQueries({ queryKey: ["all-guides"] });
    },
  });
};

// delete guide
export const useDeleteGuide = () => {
  return useMutation({
    mutationFn: (id: string) => deleteGuide(id),
  });
};
