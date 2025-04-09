import SaveCard from "@/components/cards/SaveCard";
import TranslateBtn from "@/components/TranslateBtn";
import { Separator } from "@/components/ui/separator";

const SavePage = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between m-2">
        <div className="font-bold text-2xl text-slate-500">
          Saved Collections
        </div>
        <TranslateBtn />
      </div>
      <Separator />

      {/* cards  */}
      <div className="m-3 flex flex-col-reverse gap-4">
        {/* {isLoading ? (
          <div className="flex flex-col items-center justify-center h-3/5 w-full">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : savedPost.length == 0 ? (
          <p className="text-error text-2xl  flex items-center gap-4 justify-center">
            {" "}
            Nothing in save collection! <Unplug />
          </p>
        ) : (
          savedPost?.map((savedPost, index) => {
            return (
              <div key={index}>
                {" "}
                <SaveCard post={savedPost} />
              </div>
            );
          })
        )} */}

        <SaveCard />
      </div>
    </div>
  );
};

export default SavePage;
