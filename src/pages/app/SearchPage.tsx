import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PostCard from "@/components/cards/PostCard";
import TranslateBtn from "@/components/TranslateBtn";
import { useGetAllPosts } from "@/react-query/post/post";
import { Unplug } from "lucide-react";
import { PostType } from "@/types/PostType";

const SearchPage = () => {
  // handle form inputs using react hook form
  const [display, setDisplay] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");

  const { data: posts, isLoading, isError } = useGetAllPosts();

  // Filter posts based on the search term
  const filteredPosts = posts?.filter(
    (post: PostType) =>
      post?.title.toLowerCase().includes(searchWord.toLowerCase()) ||
      (post?.contentEnglish?.toLowerCase() ?? "").includes(
        searchWord.toLowerCase()
      )
  );

  // Sort filtered posts in descending order based on the created_at property
  const sortedFilteredPosts = filteredPosts?.sort(
    (a: PostType, b: PostType) => {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    }
  );

  //* specific button array
  const wastType = [
    { title: "all" },
    { title: "most like" },
    { title: "useful" },
    { title: "ground" },
    { title: "plastic" },
    { title: "tire" },
    { title: "paper" },
    { title: "food" },
    { title: "other" },
  ];

  // for data display
  let content;

  // Function to handle button clicks
  const handleButtonClick = (title: string) => {
    setDisplay(title);
  };

  // to handle the request
  switch (display) {
    case "all":
      content = sortedFilteredPosts?.map((post: PostType, i: string) => {
        return (
          <div key={i}>
            {/* only show when admin is approve  */}
            {post?.isApproved && <PostCard post={post} />}
          </div>
        );
      });
      break;

    case "most like":
      content = sortedFilteredPosts
        ?.filter((post: PostType) => post?.Like && post.Like.length > 0)
        .sort((a: PostType, b: PostType) => b.Like.length - a.Like.length)
        .map((post: PostType, i: string) => {
          return (
            <div key={i}>
              {/* only show when admin is approve  */}
              {post?.isApproved && <PostCard post={post} />}
            </div>
          );
        });
      break;

    case "useful":
     content = sortedFilteredPosts
       ?.filter((post: PostType) => post?.Useful && post.Useful.length > 0)
       .sort((a: PostType, b: PostType) => b.Useful.length - a.Useful.length)
       .map((post: PostType, i: string) => {
         return (
           <div key={i}>
             {/* only show when admin is approve  */}
             {post?.isApproved && <PostCard post={post} />}
           </div>
         );
       });
      break;

    case "ground":
      content = sortedFilteredPosts?.map((post: PostType, i: string) => {
        return (
          <div key={i}>
            {/* only show when admin is approve  */}
            {post?.isApproved && post?.type == "ground" && (
              <PostCard post={post} />
            )}
          </div>
        );
      });
      break;

    case "plastic":
      content = sortedFilteredPosts?.map((post: PostType, i: string) => {
        return (
          <div key={i}>
            {/* only show when admin is approve  */}
            {post?.isApproved && post?.type == "plastic" && (
              <PostCard post={post} />
            )}
          </div>
        );
      });
      break;

    case "paper":
      content = sortedFilteredPosts?.map((post: PostType, i: string) => {
        return (
          <div key={i}>
            {/* only show when admin is approve  */}
            {post?.isApproved && post?.type == "paper" && (
              <PostCard post={post} />
            )}
          </div>
        );
      });
      break;

    case "food":
      content = sortedFilteredPosts?.map((post: PostType, i: string) => {
        return (
          <div key={i}>
            {/* only show when admin is approve  */}
            {post?.isApproved && post?.type == "food" && (
              <PostCard post={post} />
            )}
          </div>
        );
      });
      break;

    case "tire":
      content = sortedFilteredPosts?.map((post: PostType, i: string) => {
        return (
          <div key={i}>
            {/* only show when admin is approve  */}
            {post?.isApproved && post?.type == "tire" && (
              <PostCard post={post} />
            )}
          </div>
        );
      });
      break;

    case "other":
      content = sortedFilteredPosts?.map((post: PostType, i: string) => {
        return (
          <div key={i}>
            {/* only show when admin is approve  */}
            {post?.isApproved && post?.type == "other" && (
              <PostCard post={post} />
            )}
          </div>
        );
      });
      break;

    default:
      content = sortedFilteredPosts?.map((post: PostType, i: string) => {
        return (
          <div key={i}>
            {/* only show when admin is approve  */}
            {post?.isApproved && <PostCard post={post} />}
          </div>
        );
      });
      break;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between m-2">
        <form className="text-xl w-full flex  items-center justify-between">
          <Input
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
            type="text"
            placeholder="Search here"
            className=" w-full  max-w-xl border-slate-500"
          />
        </form>

        <TranslateBtn />
      </div>

      {/* for sub buttons  */}
      <div className="flex items-center justify-evenly flex-wrap mt-3 gap-3">
        {wastType.map((t, i) => {
          return (
            <Button
              className="rounded-full hover:cursor-pointer "
              variant={"outline"}
              key={i}
              onClick={() => handleButtonClick(t.title)}
            >
              <p className="first-letter:uppercase">{t.title}</p>
            </Button>
          );
        })}
      </div>

      <Separator className="mt-1" />

      {/* cards  */}
      <div className="flex flex-col gap-0.5">
        {isError && (
          <p className="text-error text-2xl  flex items-center gap-4 justify-center">
            Failed to fetch data! <Unplug />
          </p>
        )}
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-3/5 w-full">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
        {content}
      </div>
    </div>
  );
};

export default SearchPage;
