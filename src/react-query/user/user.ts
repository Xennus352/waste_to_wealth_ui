import { getAllUsers, getCurrentUser, updateUserInfo } from "@/apis/user/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//get all users
export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["all-users"],
    queryFn: getAllUsers,
    refetchInterval: 10000,
  });
};

// get current user
export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
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
