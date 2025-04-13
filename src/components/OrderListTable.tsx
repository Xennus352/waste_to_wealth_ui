import { TableCell, TableRow } from "@/components/ui/table";
import { OrderPayload } from "@/types/OrderPayload";

const OrderListTable = ({ order }: { order: OrderPayload }) => {
  return (
    <TableRow>
      <TableCell className="font-medium">{order.name}</TableCell>
      <TableCell>{order.buyerPhone}</TableCell>
      <TableCell>{order.buyerAddress}</TableCell>
      <TableCell>{order.Market.title}</TableCell>
      <TableCell>{order.quantity}</TableCell>
      <TableCell>{order.price}</TableCell>
    </TableRow>
  );
};

export default OrderListTable;
