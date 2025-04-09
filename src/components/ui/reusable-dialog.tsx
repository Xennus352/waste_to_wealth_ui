import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ReusableDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  classname?: string;
  trigger?: ReactNode;
}

export function ReusableDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  classname,
  trigger,
}: ReusableDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <div>
        <DialogContent
          className={`backdrop-blur-md bg-white bg-opacity-80 rounded-lg p-6 min-w-0 max-w-none ${classname}`}
        >
          <DialogHeader>
            <DialogTitle className="text-white">{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          <div className="py-4">{children}</div>
          {footer && <DialogFooter>{footer}</DialogFooter>}
        </DialogContent>
      </div>
    </Dialog>
  );
}
