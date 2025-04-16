import HandmadeListTable from "@/components/admin/HandmadeListTable";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllGuides } from "@/react-query/guide/guide";
import { HandmadeType } from "@/types/PostType";
import { Link } from "react-router-dom";

const HandMade = () => {
  const { data: guides, isLoading, isError } = useGetAllGuides();

  return (
    <>
      <div className="flex items-center justify-between m-2">
        <div className="font-bold text-2xl text-slate-500">Handmade Guides</div>
        <div>
          <Link
            to={"/dashboard/add-new-guide"}
            className={buttonVariants({ variant: "outline" })}
          >
            Add New Guide
          </Link>
        </div>
      </div>
      <Separator />

      {isLoading ? (
        <h2 className="text-center">Fetching the data please wait!</h2>
      ) : isError ? (
        <div>
          <h2 className="text-center">
            Error fetching orders. Please try again later.
          </h2>
        </div>
      ) : guides && guides?.length !== 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Author</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Content IN English</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guides?.handmades?.map((guide: HandmadeType) => {
              return <HandmadeListTable key={guide.id} guide={guide} />;
            })}
          </TableBody>
        </Table>
      ) : (
        <p className="text-center text-xl">No orders available.</p>
      )}
    </>
  );
};

export default HandMade;
