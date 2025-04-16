import {
  useDeleteUser,
  useGetCurrentUser,
  useUpdateUser,
} from "@/react-query/user/user";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import { UserType } from "@/types/PostType";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const UserListTable = ({ user }: { user: UserType }) => {
  const { mutate: deleteUser } = useDeleteUser();

  const { data: currentUser } = useGetCurrentUser();

  const { mutate: updateUserInfo } = useUpdateUser();

  const handleUserDelete = () => {
    deleteUser(user.id, {
      onSuccess: () => {
        toast.success("User Successfully Deleted!");
      },
      onError: () => {
        toast.error("Something Went Wrong!");
      },
    });
  };

  const handleUpdateUserRole = (newRole: "USER" | "ADMIN") => {
    updateUserInfo(
      { id: user.id, role: newRole },
      {
        onSuccess: () => {
          toast.success(`${user.name} role is updated to ${newRole}`);
        },
        onError: () => {
          toast.error("Failed to update role");
        },
      }
    );
  };

  const userRole = [{ status: "ADMIN" }, { status: "USER" }];
  return (
    <TableRow>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.PhoneNumber}</TableCell>
      <TableCell>{user.address}</TableCell>
      <TableCell className="uppercase">
        <Popover>
          <PopoverTrigger className="cursor-pointer border-l-2 border-r-2  p-1 rounded-lg border-sky-500">
            {user.role}
          </PopoverTrigger>
          <PopoverContent>
            {userRole.map((roleItem, index) => {
              return (
                <p
                  key={index}
                  onClick={() =>
                    handleUpdateUserRole(roleItem.status as "ADMIN" | "USER")
                  }
                  className="border rounded-lg text-center p-1 m-1 cursor-pointer"
                >
                  {roleItem.status}
                </p>
              );
            })}{" "}
          </PopoverContent>
        </Popover>
      </TableCell>
      <TableCell>
        <Button
          disabled={currentUser?.id === user.id}
          className=" cursor-pointer"
          variant={"destructive"}
          onClick={handleUserDelete}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default UserListTable;
