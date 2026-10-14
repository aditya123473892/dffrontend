import * as Yup from "yup";

export default class ResetPasswordSchema {
   schema;

   initialValues;

   constructor() {
      this.schema = Yup.object({
         confirmPassword: Yup.string()
            .required("Please confirm your password.")
            .oneOf([Yup.ref("newPassword")], "Passwords must match."),
         newPassword: Yup.string()
            .required("Please enter a password.")
            .matches(
               /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
               "Password must contain at least 8 characters, 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
            ),
      });

      this.initialValues = {
         newPassword: "",
         confirmPassword: "",
      };
   }
}
