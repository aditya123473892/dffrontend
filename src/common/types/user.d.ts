import { ERole } from "../enums/role.enum";
import { CreateUserSchema } from "../schemas";
import { Role } from "./role";

type User = {
   _id: string;
   firstName: string;
   lastName: string;
   username: string;
   phoneNumber: string;
   avatar: string;
   roles: ERole[];
   isEmailVerified: boolean;
   loginAttempts: boolean;
   loginCount: number;
   createdAt: Date | string;
   updatedAt: Date | string;
};

const object = new CreateUserSchema().initialValues;

type NewUser = typeof object;
