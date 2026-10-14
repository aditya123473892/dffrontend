import { ERole } from "../enums/role.enum";
import { User } from "../types/user";

export const loginRedirectUrl = (role: ERole, user: User): string => {
   if (role == ERole.ADMIN || role == ERole.ROOT)
      console.log("log: role", role, "/admin/dashboard");

   if (role == ERole.ADMIN || role == ERole.ROOT) return "/admin/dashboard";

   return "/feeds";
};
