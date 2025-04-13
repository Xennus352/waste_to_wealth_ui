import PostCard from "@/components/cards/PostCard";
import TranslateBtn from "@/components/TranslateBtn";
import { Separator } from "@/components/ui/separator";
import { useGetAllPosts } from "@/react-query/post/post";
import { useGetCurrentUser } from "@/react-query/user/user";
import { PostType } from "@/types/PostType";
import { Unplug } from "lucide-react";

const SavePage = () => {
  const { data: posts, isLoading } = useGetAllPosts();
  const { data: user } = useGetCurrentUser();

 const savedPosts = posts?.filter((post: PostType) =>
   post.Save?.some((s) => s.userId === user?.id)
 );


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
      <div className="m-2 flex flex-col-reverse gap-1">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-3/5 w-full">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        ) : savedPosts?.length === 0 ? (
          <p className="text-error text-2xl flex items-center gap-4 justify-center">
            Nothing in save collection! <Unplug />
          </p>
        ) : (
          savedPosts?.map((savedPost: PostType) => (
            <div key={savedPost.id}>
              <PostCard post={savedPost} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SavePage;
