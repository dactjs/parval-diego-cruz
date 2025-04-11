import { z } from "@/lib/zod";

import { UserRole } from "../constants";

export const UserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(6),
  role: z.nativeEnum(UserRole),
});

///////////
// Types //
///////////

export type User = z.infer<typeof UserSchema>;
