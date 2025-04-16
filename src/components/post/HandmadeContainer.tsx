import { useGetAllGuides } from "@/react-query/guide/guide";
import HandmadeCard from "../cards/HandmadeCard";
import Loading from "@/utils/Loading";
import { Angry } from "lucide-react";
import { HandmadeType } from "@/types/PostType";

const HandmadeContainer = () => {
  const { data: guides, isError, isLoading } = useGetAllGuides();
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <h2 className=" text-2xl text-destructive text-center">
        Something went wrong!!
      </h2>
    );
  }
  return (
    <>
      {guides?.handmades.map((guide: HandmadeType) => {
        return <HandmadeCard key={guide.id} guide={guide} />;
      })}
    </>
  );
};

export default HandmadeContainer;
