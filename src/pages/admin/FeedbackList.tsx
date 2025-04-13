import FeedbackListTable from "@/components/admin/FeedbackListTable";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllFeedbacks } from "@/react-query/contact/contact";
import { FeedbackType } from "@/types/PostType";

const FeedbackList = () => {
  const { data: feedbacks, isLoading, isError } = useGetAllFeedbacks();
  return (
    <>
      {isLoading ? (
        <h2 className="text-center">Fetching the data please wait!</h2>
      ) : isError ? (
        <div>
          <h2 className="text-center">
            Error fetching feedbacks. Please try again later.
          </h2>
        </div>
      ) : feedbacks && feedbacks.length !== 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feedbacks.map((feedback: FeedbackType) => (
              <FeedbackListTable key={feedback.id} feedback={feedback} />
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-center text-xl">No feedbacks.</p>
      )}
    </>
  );
};

export default FeedbackList;
