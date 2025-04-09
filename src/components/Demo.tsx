import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ReusableDialog } from "@/components/ui/reusable-dialog";
import CreatePostCard from "./cards/CreatePostCard";

export function Demo() {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setOpen(false);
  };

  const footerContent = (
    <div className="flex gap-2 justify-end w-full">
      <Button variant="outline" onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button variant="outline" onClick={handleConfirm}>
        Submit
      </Button>
    </div>
  );

  const triggerButton = (
    <Button
      className="cursor-pointer rounded-lg w-full text-left justify-start opacity-80"
      variant="outline"
      onClick={() => {
        console.log("one");
      }}
    >
      {" "}
      What's on your mind! Let's create now...
    </Button>
  );

  return (
    <ReusableDialog
      open={open}
      onOpenChange={setOpen}
      title="Create a new post"
      footer={footerContent}
      classname=""
      trigger={triggerButton}
    >
      <div className="">
        <CreatePostCard />
      </div>
    </ReusableDialog>
  );
}
