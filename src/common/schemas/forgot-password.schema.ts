import * as Yup from "yup";

export default class ForgotPasswordSchema {
   schema;

   initialValues;

   constructor() {
      this.schema = Yup.object({
         username: Yup.string().required("Username required"),
      });

      this.initialValues = {
         username: "",
      };
   }
}
