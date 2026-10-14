import { TAuthenticatePayload } from "@/common/types/account";
import { User } from "@/common/types/user";
import { setSession, updateUserSession } from "@/common/utils/jwt";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CreatePost = {
   user: User | null;
   isAuthenticated: boolean;
   isInitialized: boolean;
};

const initialState: CreatePost = {
   user: null,
   isAuthenticated: false,
   isInitialized: false,
};

export const createPost = createSlice({
   name: "settings",
   initialState,
   reducers: {
      logout: (state) => {
         state.user = null;
         state.isAuthenticated = false;
         state.isInitialized = true;
         setSession(null, null);
      },

      setUser: (state, action: PayloadAction<User>) => {
         state.user = action.payload;
         updateUserSession({ ...state.user, ...action.payload });
      },

      authenticate: (state, action: PayloadAction<TAuthenticatePayload>) => {
         const { user, accessToken } = action.payload;
         state.user = user;
         state.isAuthenticated = true;
         state.isInitialized = true;

         // Store in localstorage as well
         setSession(accessToken, user);
      },
   },
});

export const { setUser, logout, authenticate } = createPost.actions;
export default createPost.reducer;
