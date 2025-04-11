import { CardHeader } from "@/components/atoms/card-header";
import { CardContent } from "@/components/atoms/card-content";
import { CardFooter } from "@/components/atoms/card-footer";
import { CardTitle } from "@/components/atoms/card-title";
import { CardDescription } from "@/components/atoms/card-description";
import { CardAction } from "@/components/atoms/card-action";
import { cn } from "@/lib/shadcn";

export type CardProps = React.ComponentProps<"div">;

export function Card({ className, ...rest }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...rest}
    />
  );
}

export {
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  CardAction,
};
