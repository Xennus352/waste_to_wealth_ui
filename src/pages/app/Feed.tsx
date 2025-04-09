import { CreatePostModel } from "@/components/model/CreatePostModel";
import PostContainer from "@/components/post/PostContainer";
import TranslateBtn from "@/components/TranslateBtn";
import { Separator } from "@/components/ui/separator";

const Feed = () => {
  return (
    <div>
      <div className="flex items-center justify-between m-2">
        <div className="font-bold text-2xl text-slate-500">Feed</div>
        <div>
          <TranslateBtn />
        </div>
      </div>

      <Separator />

      <div className="m-2 sticky top-2 z-10 ">
        <CreatePostModel classname="md:min-w-3xl lg:min-w-4xl xl:min-w-4xl" />
      </div>
      {/* display all confirmed posts  */}
      <PostContainer />
    </div>
  );
};

export default Feed;
