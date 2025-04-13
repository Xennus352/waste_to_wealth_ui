import { Card } from "../ui/card";

const HandmadeCard = () => {
  const image =
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg";

  return (
    <Card className="m-2 flex flex-col md:flex-row items-center p-4 space-y-4 md:space-y-0 md:space-x-4">
      <img src={image} alt="Post" className="w-24 h-24 object-cover rounded" />
      <div className="flex-1">
        <h3 className="text-lg font-bold">Title</h3>

        <p className="text-md text-gray-700 whitespace-pre-wrap">
          Description in English
        </p>
        <p className="text-md text-gray-700 whitespace-pre-wrap">
          Description in Burmese
        </p>

        <p className="text-sm text-gray-400 uppercase">#Tag</p>
        
      </div>
    </Card>
  );
};

export default HandmadeCard;
