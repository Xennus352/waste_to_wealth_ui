import { PostType } from "@/types/PostType";
import { TableCell, TableRow } from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useDeletePost } from "@/react-query/post/post";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { truncateToWords } from "@/utils/TruncateToWords";

const UserPostListTable = ({ post }: { post: PostType }) => {
  const router = useNavigate();
  const { mutate: deletePost } = useDeletePost();

  const handleAction = (actionName: "edit" | "delete") => {
    if (actionName === "edit") {
      return router(`/dashboard/post/${post.id}`);
    }

    if (actionName === "delete") {
      deletePost(post.id, {
        onSuccess: () => {
          toast.success(`Post Deleted Successfully`);
        },
        onError: () => {
          toast.error("Failed to delete");
        },
      });
    }
  };
  const postDetails = [{ status: "edit" }, { status: "delete" }];
  return (
    <TableRow>
      <TableCell className="font-medium">{post.User?.name}</TableCell>
      <TableCell>{post.User?.email}</TableCell>
      <TableCell>
        {post.isApproved ? (
          <p className="text-sky-500 tracking-wider">Published</p>
        ) : (
          <p className="text-red-500 tracking-wider">Draft</p>
        )}
      </TableCell>
      <TableCell className="whitespace-pre-wrap">
        {truncateToWords(post.contentBurmese, 20)}
      </TableCell>
      <TableCell className="uppercase">
        <Popover>
          <PopoverTrigger className="cursor-pointer border-l-2 border-r-2  p-1 rounded-lg border-sky-500">
            Check Details
          </PopoverTrigger>
          <PopoverContent>
            {postDetails.map((postAct, index) => {
              return (
                <p
                  key={index}
                  onClick={() => {
                    handleAction(postAct.status as "edit" | "delete");
                  }}
                  className="border rounded-lg uppercase text-center p-1 m-1 cursor-pointer"
                >
                  {postAct.status}
                </p>
              );
            })}{" "}
          </PopoverContent>
        </Popover>
      </TableCell>
     
    </TableRow>
  );
};

export default UserPostListTable;
