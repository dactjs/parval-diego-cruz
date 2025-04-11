import * as DialogPrimitive from "@radix-ui/react-dialog";

import { DialogHeader } from "@/components/atoms/dialog-header";
import { DialogContent } from "@/components/atoms/dialog-content";
import { DialogFooter } from "@/components/atoms/dialog-footer";
import { DialogTitle } from "@/components/atoms/dialog-title";
import { DialogDescription } from "@/components/atoms/dialog-description";
import { DialogClose } from "@/components/atoms/dialog-close";
import { DialogTrigger } from "@/components/atoms/dialog-trigger";

export type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root>;

export function Dialog(props: DialogProps) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

export {
  DialogHeader,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogTrigger,
};
