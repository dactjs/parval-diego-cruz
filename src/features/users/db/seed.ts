import type { User } from "../schemas/users";
import { UserRole } from "../constants";

export const DEFAULT_USERS: User[] = [
  {
    username: "admin",
    password: "admin123",
    role: UserRole.ADMIN,
  },
  {
    username: "ejecutivo",
    password: "negocio456",
    role: UserRole.BUSINESS_EXECUTIVE,
  },
  {
    username: "servicio",
    password: "cliente789",
    role: UserRole.CUSTOMER_SERVICE,
  },
] as const;
