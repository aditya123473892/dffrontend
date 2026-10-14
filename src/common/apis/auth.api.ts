const base = "/auth";

const AuthApi = {
   base,
   login: base + "/login",
   signup: base + "/signup",
   forgotPassword: base + "/forgot-password",
   resetPassword: base + "/reset-password",
   createPassword: base + "/create-password",
   getMe: base + "/me",
   verifyEmail: base + "/verify-email",
};

export default AuthApi;
