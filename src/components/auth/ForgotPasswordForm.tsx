"use client";
import { Formik } from "formik";
import { ForgotPasswordSchema } from "@/common/schemas";
import { Icon } from "@iconify/react";
import { Button, Input } from "@nextui-org/react";
import { postApi } from "@/common/apis/main.api";
import AuthApi from "@/common/apis/auth.api";
import toast from "react-hot-toast";
import { useState } from "react";

const ForgotPasswordForm = () => {
   const forgotPasswordSchema = new ForgotPasswordSchema();
   const [isSuccess, setIsSuccess] = useState(false);

   const handleForgotPassword = async (values: any, resetForm: any) => {
      const res = await postApi({
         url: AuthApi.forgotPassword,
         values,
      });
      if (res.error) return toast.error(res.message);
      toast.success(res.message);
      resetForm();
      setIsSuccess(true);
   };

   return (
      <Formik
         initialValues={forgotPasswordSchema.initialValues}
         validationSchema={forgotPasswordSchema.schema}
         onSubmit={async (values, { setSubmitting, resetForm }) => {
            await handleForgotPassword(values, resetForm);
            setSubmitting(false);
         }}
      >
         {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
         }) => (
            <form
               onSubmit={handleSubmit}
               className="flex flex-col gap-4 justify-center items-center w-full "
            >
            
               <Input
                  type="text"
                  variant="bordered"
                  name="username"
                  label="Email"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMessage={errors.username}
                  isInvalid={!!errors.username && touched.username}
                  className="w-full"
                  size="sm"
               />

               <Button
                  className="w-full bg-blue-500 text-white mb -5"
                  size="lg"
                  type="submit"
                  spinner={
                     <Icon icon="line-md:loading-twotone-loop" fontSize={24} />
                  }
                  isLoading={isSubmitting}
               >
                  Generate Link
               </Button>

               {isSuccess && (
                  <div
                     className="border border-[#49CC90] bg-[#E8F6F0] text-[#39ab77] py-3 px-4 rounded w-full flex justify-between items-center"
                     role="alert"
                  >
                     <p className="text-md font-medium">
                        Password reset mail sent to your email
                     </p>
                     <Icon icon="material-symbols:check-box" fontSize={24} />
                  </div>
               )}
            </form>
         )}
      </Formik>
   );
};

export default ForgotPasswordForm;
