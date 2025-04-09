import { useState } from "react";
import { ReusableDialog } from "@/components/ui/reusable-dialog";
import { MessageSquareCode } from "lucide-react";
import CommentCard from "../cards/CommentCard";

export function CommentModel({
  classname,
  id,
}: {
  classname?: string;
  id: string;
}) {
  const [open, setOpen] = useState(false);

  const triggerButton = (
    <button className="cursor-pointer rounded-lg w-fit text-left justify-start opacity-80">
      <MessageSquareCode />
    </button>
  );

  return (
    <ReusableDialog
      open={open}
      onOpenChange={setOpen}
      title="Comment"
      classname={classname}
      trigger={triggerButton}
    >
      <div className="h-full">
        <CommentCard postId={id} />
      </div>
    </ReusableDialog>
  );
}
