"use client";

import { Toaster } from "react-hot-toast";
import { store } from "./store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
   return (
      <Provider store={store}>
         <Toaster position="top-center" reverseOrder={false} />
         {children}
      </Provider>
   );
}
