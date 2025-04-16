import { HandmadeType } from "@/types/PostType";
import { Card } from "../ui/card";
import useGetLanguage from "@/hooks/useGetLanguage";

const HandmadeCard = ({ guide }: { guide: HandmadeType }) => {
  const image =
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg";

  const language = useGetLanguage();

  return (
    <Card className="m-2 flex flex-col md:flex-row items-center p-4 space-y-4 md:space-y-0 md:space-x-4">
      <img
        src={guide?.picture ? guide?.picture : image}
        alt="Post"
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-lg font-bold">{guide.title}</h3>
        {language == "English" ? (
          <p className="text-md text-gray-700 whitespace-pre-wrap">
            {guide.descriptionEng}
          </p>
        ) : (
          <p className="text-md text-gray-700 whitespace-pre-wrap">
            {guide.descriptionMyan}
          </p>
        )}

        <p className="text-sm text-gray-400 uppercase">~ {guide.User?.name}</p>
      </div>
    </Card>
  );
};

export default HandmadeCard;
