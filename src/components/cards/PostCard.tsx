import {
  Bookmark,
  BookmarkCheck,
  CircleCheckBig,
  Globe,
  GlobeLock,
  Heart,
  Star,
} from "lucide-react";
import { Card } from "../ui/card";
import { PostType } from "@/types/PostType";
import useGetLanguage from "@/hooks/useGetLanguage";
import { CommentModel } from "../model/CommentModel";
import { useCreateLike, useGetAllLikes } from "@/react-query/like/like";
import { useGetCurrentUser } from "@/react-query/user/user";
import { useEffect, useState } from "react";
import { useCreateUseful, useGetAllUseful } from "@/react-query/useful/useful";
import { useCreateSave, useGetAllSave } from "@/react-query/save/save";

const PostCard = ({ post }: { post: PostType }) => {
  const image =
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg";

  const language = useGetLanguage();

  // Get current user
  const { data: currentUser } = useGetCurrentUser();

  //  Get likes only for this specific post
  const { data: likesData, refetch } = useGetAllLikes(post.id);

  // get useful
  const { data: usefulData } = useGetAllUseful(post.id);

  //get save
  const { data: saveData } = useGetAllSave(post.id);

  // State to track if the current user is useful the post
  const [isUseful, setIsUseful] = useState(false);

  // State to track if the current user is saved the post
  const [isSaved, setIsSaved] = useState(false);

  // State to track if the current user has liked the post
  const [isLiked, setIsLiked] = useState(false);

  // for action buttons
  useEffect(() => {
    // for like button
    if (likesData && currentUser) {
      const liked = likesData.likes.some(
        (like: any) =>
          like.postId === post.id && like.User.id === currentUser.id
      );
      setIsLiked(liked);
    }

    // for useful button
    if (usefulData && currentUser) {
      const useful = usefulData.useful.some(
        (useful: any) =>
          useful.postId === post.id && useful.User.id === currentUser.id
      );
      setIsUseful(useful);
    }

    // for save button
    if (saveData && currentUser) {
      const save = saveData?.saves.some(
        (save: any) =>
          save.postId === post.id && save.User.id === currentUser.id
      );
      setIsSaved(save);
    }
  }, [likesData, usefulData, saveData, currentUser, post.id]);

  // Count total likes for the post
  const totalLikes = likesData
    ? likesData.likes.filter((like: any) => like.postId === post.id).length
    : 0;

  // Count total useful for the post
  const totalUseful = usefulData
    ? usefulData.useful.filter((useful: any) => useful.postId === post.id)
        .length
    : 0;

  // Handle like
  const { mutate: createLike } = useCreateLike();

  const handleLike = () => {
    createLike(post.id, {
      onSuccess: () => {
        refetch(); // Refetch likes after liking
        setIsLiked((prev) => !prev); // Toggle the like state
      },
    });
  };

  //handle useful
  const { mutate: createUseful } = useCreateUseful();

  const handleUseful = () => {
    createUseful(post.id);
  };

  //save post
  const { mutate: createSave } = useCreateSave();

  const handleSave = () => {
    createSave(post.id);
  };

  const actionBtn = [
    {
      title: "like",
      icon1: <Heart color="#3dabf0" />,
      icon2: <Heart />,
      active: isLiked,
      count: totalLikes,
      work: handleLike,
    },
    {
      title: "useful",
      icon1: <CircleCheckBig color="#3dabf0" />,
      icon2: <CircleCheckBig />,
      count: totalUseful,
      active: isUseful,
      work: handleUseful,
    },
    {
      title: "save",
      icon1: <BookmarkCheck color="#3dabf0" />,
      icon2: <Bookmark />,
      active: isSaved,
      work: handleSave,
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
        <div className="flex items-center justify-between">
          <div className=" flex items-center   gap-2">
            <p className="text-xl font-bold">{post?.title}</p>
            {totalUseful == 5 && (
              <Star
                strokeWidth={1.5}
                size={16}
                color="#ffc524"
                fill="#ffc524"
              />
            )}
          </div>
          <div>
            {post?.isApproved && post?.userId == currentUser.id ? (
              <div className="flex text-sm items-center gap-1.5 font-semibold text-[#3dabf0] ">
                <Globe color="#3dabf0" size={16} strokeWidth={1.5} />
                <span>Published</span>
              </div>
            ) : (
              <div className="flex text-sm items-center gap-1.5 font-semibold text-black ">
                <GlobeLock color="#585555" size={16} strokeWidth={1.5} />{" "}
                <span>Draft</span>
              </div>
            )}
          </div>
        </div>
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
