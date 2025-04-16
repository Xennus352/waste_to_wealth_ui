import { OrderPayload } from "@/types/OrderPayload";
import { Card } from "../ui/card";

const PersonalOrderHistory = ({ order }: { order: OrderPayload }) => {
  const image =
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg";


  return (
    <Card className="m-2 flex flex-col md:flex-row items-center p-4 space-y-4 md:space-y-0 md:space-x-4">
      <img
        src={order?.Market.picture ? order?.Market.picture : image}
        alt="Post"
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-lg font-bold">{order.Market.title}</h3>

        <p className="text-md text-gray-700 whitespace-pre-wrap">
          {order.price}
        </p>

        <p className="text-md text-gray-700 whitespace-pre-wrap">
          {order.quantity}
        </p>

        <p className="text-sm text-gray-400 uppercase">
          ~ {order.productOwnerName}
        </p>
      </div>
    </Card>
  );
};

export default PersonalOrderHistory;
