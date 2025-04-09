import {
  useCreateCommet,
  useGetAllComments,
} from "@/react-query/comment/comment";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import ChatBubble from "./ChatBubble";
import { CommentType } from "@/types/PostType";

const CommentCard = ({ postId }: { postId: string }) => {
  // get all comments
  const { data: comment } = useGetAllComments(postId);

  // create comment
  const { mutate: createComment } = useCreateCommet();

  const handleCreateComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const content = formData.get("content") as string;

    if (content.trim()) {
      createComment({ postId, content });
      event.currentTarget.reset();
    }
  };
  return (
    <>
      <Card className="flex items-center pb-2 h-11/12 justify-between flex-col bg-slate-300">
        <CardContent className="w-full h-56  md:h-96 lg:h-96 xl:h-96">
          <div className="w-full h-48 md:h-80 lg:h-80 xl:h-80 rounded-lg overflow-y-scroll custom-scrollbar">
            {/* result  */}
            {comment && comment.length > 0 ? (
              comment.map((cmt: CommentType) => (
                <div key={cmt.id}>
                  <ChatBubble commentData={cmt} />
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No comments yet. Be the first to comment!
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className=" w-full ">
          <form
            className=" w-full flex items-center flex-row justify-evenly gap-3.5"
            onSubmit={handleCreateComment}
          >
            <Input
              placeholder="Write your message..."
              name="content"
              className=" w-full placeholder:text-black"
            />
            <div className="w-fit ">
              <Button className="hover:cursor-pointer" variant={"outline"}>
                Send
              </Button>
            </div>
          </form>
        </CardFooter>
      </Card>
    </>
  );
};

export default CommentCard;
