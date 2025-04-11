export const USERS_STORAGE_KEY = "users";

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export const UserRole = {
  ADMIN: "admin",
  BUSINESS_EXECUTIVE: "business_executive",
  CUSTOMER_SERVICE: "customer_service",
} as const;
