import UserListTable from "@/components/admin/UserListTable";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
} from "@/components/ui/table";
import { useGetAllUsers } from "@/react-query/user/user";

import { UserType } from "@/types/PostType";

const UserList = () => {
  const { data: allUsers, isLoading, isError } = useGetAllUsers();

  return (
    <>
      {isLoading ? (
        <h2 className="text-center">Fetching the data please wait!</h2>
      ) : isError ? (
        <div>
          <h2 className="text-center">
            Error fetching orders. Please try again later.
          </h2>
        </div>
      ) : allUsers && allUsers.length !== 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allUsers.map((user: UserType) => (
              <UserListTable key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-center text-xl">No orders available.</p>
      )}
    </>
  );
};

export default UserList;
