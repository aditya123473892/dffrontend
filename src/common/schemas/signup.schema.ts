import * as Yup from "yup";

export default class SignupSchema {
   schema;

   initialValues;

   constructor() {
      this.schema = Yup.object({
         firstName: Yup.string().required("Full Name required"),
         lastName: Yup.string().required("Full Name required"),
         username: Yup.string()
            .email("Must be a valid email id!")
            .required("Username required"),
         age: Yup.number().required("Age required!"),
         gender: Yup.string().required("Please select your gender!"),
         password: Yup.string()
            .required("Please enter a password.")
            .matches(
               /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
               "Password must contain at least 8 characters, 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
            ),
         confirmPassword: Yup.string()
            .required("Please confirm your password.")
            .oneOf([Yup.ref("password")], "Passwords must match."),
      });

      this.initialValues = {
         // firstName: "Jarvis",
         // lastName: "Friday",
         // age: "20",
         // gender: "male",
         // phoneNumber: "+918765270499",
         // username: "jfriday464@gmail.com",
         // password: "Test1234@",
         // confirmPassword: "Test1234@",

         firstName: "",
         lastName: "",
         age: "",
         gender: "",
         phoneNumber: "",
         username: "",
         password: "",
         confirmPassword: "",
      };
   }
}
