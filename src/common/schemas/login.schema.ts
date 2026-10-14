import * as Yup from "yup";

export default class LoginSchema {
   schema;

   initialValues;

   constructor() {
      this.schema = Yup.object({
         username: Yup.string()
            .email("Must be a valid email id!")
            .required("Username required"),
         password: Yup.string().required("Please enter password!"),
      });

      this.initialValues = {
         username: "",
         password: "",
      };
   }
}
