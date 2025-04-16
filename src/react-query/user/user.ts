import {
  getAllUsers,
  getCurrentUser,
  getDeleteUser,
  updateUserInfo,
} from "@/apis/user/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//get all users
export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["all-users"],
    queryFn: getAllUsers,
    refetchInterval: 1000,
  });
};

// get current user
export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
    retry: 3,
  });
};

// update user info
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { [key: string]: any; id: string }) =>
      updateUserInfo(data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["current-user"] });
      queryClient.refetchQueries({ queryKey: ["current-user"] });
    },
  });
};

//delete user
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => getDeleteUser(id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["alll-users"] });
      queryClient.refetchQueries({ queryKey: ["alll-users"] });
    },
  });
};
