import UserPostListTable from "@/components/admin/UserPostListTable";
import RichTextEditor from "@/components/rich-text-editor/RichTextEditor";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Separator } from "@/components/ui/separator";
import { useGetAllPosts } from "@/react-query/post/post";
import { PostType } from "@/types/PostType";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

const AdminFeed = () => {
  // TODO: HANDMADE //NEWS FEED // NEED TO ADD POST PIC // EDIT UI ABOUT & INFORMATION

  const { data: posts, isLoading, isError } = useGetAllPosts();

  return (
    <>
      <div className="flex items-center justify-between m-2">
        <div className="font-bold text-2xl text-slate-500">Feed</div>
        <div>
          <Link
            to={"/dashboard/create-new-post"}
            className={buttonVariants({ variant: "outline" })}
          >
            Create New Post
          </Link>
        </div>
      </div>

      <Separator />

      {/* display content  */}
      {isLoading ? (
        <h2 className="text-center">Fetching the data please wait!</h2>
      ) : isError ? (
        <div>
          <h2 className="text-center">
            Error fetching feedbacks. Please try again later.
          </h2>
        </div>
      ) : posts && posts.length !== 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Approve</TableHead>
              <TableHead>Content in Burmese</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post: PostType) => (
              <UserPostListTable key={post.id}  post={post}/>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-center text-xl">No Posts.</p>
      )}
    </>
  );
};

export default AdminFeed;
