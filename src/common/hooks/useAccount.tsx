import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
   setUser as reduxSetUser,
   authenticate as reduxAuthenticate,
   logout as reduxLogout,
} from "../redux/features/accountSlice";
import { User } from "../types/user";
import { TAuthenticatePayload } from "../types/account";
import { useEffect } from "react";
import { getSession, isValidToken } from "../utils/jwt";

export default function useAccount() {
   const account = useAppSelector((state) => state.account);
   const dispatch = useAppDispatch();

   useEffect(() => {
      const initialize = async () => {
         try {
            const { accessToken, user } = getSession();

            if (accessToken && isValidToken(accessToken)) {
               // TODO: Apply setting refresh token
               // setSession(accessToken);

               // if (!user?._id) {
               // TODO: Call API here to fetch users details
               // }
               // const response = await axiosInstance.get('/api/account/my-account');
               // const { user } = response.data;

               dispatch(
                  reduxAuthenticate({
                     user,
                     accessToken,
                  })
               );
            } else {
               dispatch(reduxLogout());
            }
         } catch (err) {
            dispatch(reduxLogout());
         }
      };

      initialize();
   }, []);

   const setUser = (user: User) => {
      dispatch(reduxSetUser(user));
   };

   const logout = () => {
      dispatch(reduxLogout());
   };

   const authenticate = (payload: TAuthenticatePayload) => {
      dispatch(reduxAuthenticate(payload));
   };

   return {
      account,
      setUser,
      authenticate,
      logout,
   };
}
