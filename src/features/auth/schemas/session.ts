import { UserRole } from "@/features/users/constants";
import { z } from "@/lib/zod";

export const SessionSchema = z.object({
  user: z.object({
    username: z.string(),
    role: z.nativeEnum(UserRole),
  }),
});

///////////
// Types //
///////////

export type Session = z.infer<typeof SessionSchema>;
