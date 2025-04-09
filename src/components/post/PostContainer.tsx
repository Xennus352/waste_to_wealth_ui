import { useGetAllPosts } from "@/react-query/post/post";
import { PostType } from "@/types/PostType";
import PostCard from "../cards/PostCard";
import { Unplug } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const PostContainer = () => {
  const { data: posts, isLoading, isError } = useGetAllPosts();

  if (isLoading) {
    return (
      <>
        <div className="flex flex-col items-center justify-center md:flex-row gap-3 space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2 p-2 md:p-5">
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row gap-3 space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2 p-2 md:p-5">
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row gap-3 space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2 p-2 md:p-5">
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
            <Skeleton className="h-4 md:w-[450px] lg:w-[450px] xl:w-[450px] w-[250px]" />
          </div>
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <div className="text-destructive h-44 text-center text-3xl flex flex-col items-center justify-center gap-3">
        <p>Something went wrong while getting posts!</p>
        <div>
          <Unplug size={50} />
        </div>
      </div>
    );
  }

  // checking approve
  const approvedPosts = posts?.filter(
    (post: PostType) => post.isApproved == true
  );
  return (
    <div>
      {approvedPosts?.map((post: PostType) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
