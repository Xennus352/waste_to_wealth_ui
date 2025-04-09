import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ReusableDialog } from "@/components/ui/reusable-dialog";
import CreatePostCard from "../cards/CreatePostCard";

export function CreatePostModel({ classname }: { classname?: string }) {
  const [open, setOpen] = useState(false);

  const triggerButton = (
    <Button
      className="cursor-pointer rounded-lg w-full text-left justify-start opacity-80"
      variant="outline"
    >
      What's on your mind! Let's create now...
    </Button>
  );

  const handlePostSubmit = () => {
    setOpen(false); // Close the dialog when the post is submitted
  };

  return (
    <ReusableDialog
      open={open}
      onOpenChange={setOpen}
      title="Create a new post"
      classname={classname}
      trigger={triggerButton}
    >
      <div>
        <CreatePostCard onPostSubmit={handlePostSubmit} />
      </div>
    </ReusableDialog>
  );
}
