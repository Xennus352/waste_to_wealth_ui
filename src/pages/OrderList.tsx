import OrderListTable from "@/components/OrderListTable";
import { useGetAllOrder } from "@/react-query/order/order";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderPayload } from "@/types/OrderPayload";
import { useGetCurrentUser } from "@/react-query/user/user";

const OrderList = () => {
  const { data: orders, isLoading, isError } = useGetAllOrder();

  const { data: currentUser } = useGetCurrentUser();

  // Filter orders for current user as the seller
  const filteredOrders = orders?.filter(
    (order: OrderPayload) => order.productOwnerName === currentUser?.name
  );
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
      ) : filteredOrders && filteredOrders.length !== 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Customer</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order: OrderPayload) => (
              <OrderListTable key={order.id} order={order} />
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-center text-xl">No orders available.</p>
      )}
    </>
  );
};

export default OrderList;
