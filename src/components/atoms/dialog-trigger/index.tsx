import * as DialogPrimitive from "@radix-ui/react-dialog";

export type DialogTriggerProps = React.ComponentProps<
  typeof DialogPrimitive.Trigger
>;

export function DialogTrigger(props: DialogTriggerProps) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}
