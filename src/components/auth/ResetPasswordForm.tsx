"use client";
import { useState } from "react";
import { Formik } from "formik";
import { ResetPasswordSchema } from "@/common/schemas";
import { Icon } from "@iconify/react";
import { Button, Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { postApi } from "@/common/apis/main.api";
import AuthApi from "@/common/apis/auth.api";
import toast from "react-hot-toast";

const ResetPasswordForm = () => {
   const resetPasswordSchema = new ResetPasswordSchema();
   const searchParams = useSearchParams();
   const [isSuccess, setIsSuccess] = useState(false);

   const token = searchParams.get("token");

   const [isVisible, setIsVisible] = useState(false);

   const toggleVisibility = () => setIsVisible(!isVisible);

   const handleResetPassword = async (
      values: typeof resetPasswordSchema.initialValues,
      resetForm: any
   ) => {
      const res = await postApi({
         url: AuthApi.resetPassword,
         values: { token, password: values.confirmPassword },
      });

      // Return if error
      if (res.error) return;

      resetForm();
      setIsSuccess(true);
      toast.success("Password Changed!, Please go to login");
   };

   return (
      <Formik
         initialValues={resetPasswordSchema.initialValues}
         validationSchema={resetPasswordSchema.schema}
         onSubmit={async (values, { setSubmitting, resetForm }) => {
            await handleResetPassword(values, resetForm);
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
               className="flex flex-col  justify-center items-center w-full "
            >
               <h2 className="text-[28px] md:text-[42px] font-semibold text-blue-500">
                  Set Your New Password
               </h2>

               <p className=" font-semibold ">
                  Password
               </p>
               <Input
                  type={isVisible ? "text" : "password"}
                  variant="bordered"
                  name="newPassword"
                  label="New Password"
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMessage={errors.newPassword}
                  isInvalid={!!errors.newPassword && touched.newPassword}
                  endContent={
                     <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                     >
                        {isVisible ? (
                           <Icon icon="ph:eye-slash" fontSize={20} />
                        ) : (
                           <Icon icon="ph:eye-light" fontSize={20} />
                        )}
                     </button>
                  }
                  className="w-full"
               />
               <p className=" font-semibold mt-4 ">
                  Confirm Password
               </p>
               <Input
                  type="password"
                  variant="bordered"
                  name="confirmPassword"
                  label="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMessage={errors.confirmPassword}
                  isInvalid={
                     !!errors.confirmPassword && touched.confirmPassword
                  }
                  className="w-full"
               />

               <Button
                  className="w-full bg-blue-500 text-white mt-4"
                  size="lg"
                  type="submit"
                  spinner={
                     <Icon icon="line-md:loading-twotone-loop" fontSize={24} />
                  }
                  isLoading={isSubmitting}
               >
                  Reset Password
               </Button>

               {isSuccess && (
                  <div
                     className="border border-[#49CC90] bg-[#E8F6F0] text-[#39ab77] py-3 px-4 rounded w-full flex justify-between items-center"
                     role="alert"
                  >
                     <p className="text-md">
                        Password changed!, Please login now...
                     </p>
                     <Icon icon="material-symbols:check-box" fontSize={24} />
                  </div>
               )}
            </form>
         )}
      </Formik>
   );
};

export default ResetPasswordForm;
