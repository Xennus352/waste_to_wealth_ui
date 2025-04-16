import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { TableCell, TableRow } from "../ui/table";
import { HandmadeType } from "@/types/PostType";
import { useDeleteGuide } from "@/react-query/guide/guide";
import { useNavigate } from "react-router-dom";

const HandmadeListTable = ({ guide }: { guide: HandmadeType }) => {
  const router = useNavigate();
  const { mutate: deletePost } = useDeleteGuide();

  const handleAction = (actionName: "edit" | "delete") => {
    if (actionName === "edit") {
      return router(`/dashboard/guide/${guide.id}`);
    }

    if (actionName === "delete") {
      deletePost(guide.id, {
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
      <TableCell className="font-medium">{guide.User?.name}</TableCell>
      <TableCell>{guide.title}</TableCell>
      <TableCell>{guide.descriptionEng}</TableCell>
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

export default HandmadeListTable;
