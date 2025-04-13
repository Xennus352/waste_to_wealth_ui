import { FeedbackType } from "@/types/PostType";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useDeleteFeedback } from "@/react-query/contact/contact";

const FeedbackListTable = ({ feedback }: { feedback: FeedbackType }) => {
  const { mutate: deleteFeedback } = useDeleteFeedback();
  return (
    <TableRow>
      <TableCell className="font-medium">{feedback.User.name}</TableCell>
      <TableCell>{feedback.User.email}</TableCell>
      <TableCell>{feedback.User.PhoneNumber}</TableCell>
      <TableCell>{feedback.content}</TableCell>

      <TableCell>
        <Button
          className=" cursor-pointer"
          variant={"destructive"}
          onClick={() => {
            deleteFeedback(feedback.id, {
              onSuccess: () => {
                toast.success("Successfully deleted!");
              },

              onError: () => {
                toast.error("Failed to delete!");
              },
            });
          }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default FeedbackListTable;
