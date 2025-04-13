import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ReusableDialog } from "@/components/ui/reusable-dialog";
import CreateProductCard from "../cards/CreateProductCard";

export function CreateProductModel({ classname }: { classname?: string }) {
  const [open, setOpen] = useState(false);

  const triggerButton = (
    <Button
      className="cursor-pointer rounded-lg w-full text-left justify-start opacity-80"
      variant="outline"
    >
      Let's create now...
    </Button>
  );

  const handlePostSubmit = () => {
    setOpen(false); // Close the dialog when the post is submitted
  };

  return (
    <ReusableDialog
      open={open}
      onOpenChange={setOpen}
      title="Create a new product"
      classname={classname}
      trigger={triggerButton}
    >
      <div>
        <CreateProductCard onPostSubmit={handlePostSubmit} />
      </div>
    </ReusableDialog>
  );
}
