import * as DialogPrimitive from "@radix-ui/react-dialog";

export type DialogPortalProps = React.ComponentProps<
  typeof DialogPrimitive.Portal
>;

export function DialogPortal(props: DialogPortalProps) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}
