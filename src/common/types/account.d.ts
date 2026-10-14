import { User } from "./user";

export type TAuthenticatePayload = {
   user: User;
   accessToken: string;
};
