import * as Yup from "yup";

export default class ConnectAPIKeySchema {
   schema;

   initialValues;

   constructor() {
      this.schema = Yup.object({
         jotformAPIKey: Yup.string().required("Please enter your API Key"),
      });

      this.initialValues = {
         jotformAPIKey: "",
      };
   }
}
