import { CommentType } from "@/types/PostType";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ChatBubble = ({ commentData }: { commentData: CommentType }) => {
  return (
    <div className="flex items-end space-x-3 max-w-md p-4">
      {/* Avatar on the left */}
      <Avatar className="flex-shrink-0 self-end">
        {/* Adjust avatar position */}
        <AvatarImage src={commentData?.User?.ProfilePic} />
        <AvatarFallback>{commentData?.User?.name}</AvatarFallback>
      </Avatar>

      {/* Chat bubble */}
      <div>
        <div className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">{commentData?.User?.name}</span>
          <span className="ml-2 text-xs text-gray-500">
            {new Date(commentData.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        <div className="bg-gray-200 text-black text-lg rounded-tr-2xl rounded-tl-2xl rounded-br-2xl px-4 py-2 inline-block relative">
          {commentData?.content}

          {/* Add a sharp triangle for the left bottom */}
          <div className="absolute -left-2 bottom-0 w-0 h-0 border-t-[10px] border-t-gray-200 border-l-[10px] border-l-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
