import { Bookmark, BookmarkCheck, CircleCheckBig, Heart } from "lucide-react";
import { Card } from "../ui/card";
import { PostType } from "@/types/PostType";
import useGetLanguage from "@/hooks/useGetLanguage";
import { CommentModel } from "../model/CommentModel";
import { useCreateLike, useGetAllLikes } from "@/react-query/like/like";
import { useGetCurrentUser } from "@/react-query/user/user";

const PostCard = ({ post }: { post: PostType }) => {
  const image =
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg";

  const language = useGetLanguage();

  // Get current user
  const { data: currentUser } = useGetCurrentUser();

  //  Get likes only for this specific post
  const { data: likesData, refetch } = useGetAllLikes(post.id);

  console.log(likesData)

  //  Handle like
  const { mutate: createLike } = useCreateLike();

  const handleLike = () => {
    createLike(post.id, {
      onSuccess: () => refetch(), // Refetch likes after liking
    });
  };

  const actionBtn = [
    {
      title: "like",
      icon1: <Heart color="#3dabf0" />,
      icon2: <Heart />,
      count: '',
      active: '',
      work: handleLike,
    },
    {
      title: "useful",
      icon1: <CircleCheckBig color="#3dabf0" />,
      icon2: <CircleCheckBig />,
      count: "", // You can hook this up later
      active: false,
      work: () => console.log("Useful clicked"),
    },
    {
      title: "save",
      icon1: <BookmarkCheck color="#3dabf0" />,
      icon2: <Bookmark />,
      active: false,
      work: () => console.log("Save clicked"),
    },
  ];

  return (
    <Card className="m-2 flex flex-col md:flex-row items-center p-4 space-y-4 md:space-y-0 md:space-x-4">
      <img
        src={post?.image || image}
        alt="Post"
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-lg font-bold">{post?.title}</h3>

        <p className="text-md text-gray-700 whitespace-pre-wrap">
          {language === "English" ? post?.contentEnglish : post?.contentBurmese}
        </p>

        <p className="text-sm text-gray-400 uppercase">#{post?.type}</p>

        <div className="flex space-x-2 mt-2 justify-end">
          {actionBtn.map((action) => (
            <button
              key={action.title}
              className="px-3 py-1 hover:cursor-pointer text-slate-500 rounded flex items-center space-x-1"
              onClick={action.work}
            >
              {action.active ? action.icon1 : action.icon2}
              {action.count !== "" && (
                <span className="text-sm text-gray-600">{action.count}</span>
              )}
            </button>
          ))}
          <CommentModel
            classname="h-96 md:min-w-4xl md:h-4/5 lg:min-w-5xl lg:h-5/6 xl:min-w-5xl xl:h-5/6"
            id={post?.id}
          />
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
