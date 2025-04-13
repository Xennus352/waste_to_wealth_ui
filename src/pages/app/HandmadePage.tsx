import HandmadeContainer from "@/components/post/HandmadeContainer";
import TranslateBtn from "@/components/TranslateBtn";
import { Separator } from "@/components/ui/separator";

const HandmadePage = () => {
  return (
    <div>
      <div className="flex items-center justify-between m-2">
        <div className="font-bold text-2xl text-slate-500">
          Handmade Guides!
        </div>
        <div>
          <TranslateBtn />
        </div>
      </div>

      <Separator />
      <HandmadeContainer />
    </div>
  );
};

export default HandmadePage;
