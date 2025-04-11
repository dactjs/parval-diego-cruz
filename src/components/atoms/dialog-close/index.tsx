import * as DialogPrimitive from "@radix-ui/react-dialog";

export type DialogCloseProps = React.ComponentProps<
  typeof DialogPrimitive.Close
>;

export function DialogClose(props: DialogCloseProps) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}
