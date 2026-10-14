"use client";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import { LoginSchema } from "@/common/schemas";
import { Icon } from "@iconify/react";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { IoReload } from "react-icons/io5";

type Props = {
    onSubmit: (values: any) => Promise<any>;
};

const LoginForm = ({ onSubmit }: Props) => {
    const loginSchema = new LoginSchema();
    const [isVisible, setIsVisible] = useState(false);
    const [captcha, setCaptcha] = useState<string>("");
    const [captchaInput, setCaptchaInput] = useState<string>("");
    const [captchaError, setCaptchaError] = useState<string>("");

    const toggleVisibility = () => setIsVisible(!isVisible);

    // Generate a random CAPTCHA string
    const generateCaptcha = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let captchaString = "";
        for (let i = 0; i < 6; i++) {
            captchaString += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptcha(captchaString);
    };

    useEffect(() => {
        generateCaptcha(); // Generate CAPTCHA when component mounts
    }, []);

    const handleRefreshCaptcha = () => {
        generateCaptcha(); // Refresh CAPTCHA when button is clicked
        setCaptchaInput(""); // Clear the user's input
        setCaptchaError(""); // Clear any previous error
    };

    return (
        <Formik
            initialValues={loginSchema.initialValues}
            enableReinitialize={true}
            validationSchema={loginSchema.schema}
            onSubmit={async (values, { setSubmitting }) => {
                // Check CAPTCHA validity
                if (captchaInput !== captcha) {
                    setCaptchaError("Incorrect CAPTCHA. Please try again.");
                    return;
                }

                try {
                    await onSubmit(values);
                } catch (error: any) {
                    toast.error(error.message);
                } finally {
                    setSubmitting(false);
                }
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
                    className="flex flex-col justify-center items-center w-full"
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

                    <div className="w-full mt-4">
                        {/* <div className="flex justify-end items-end w-full font-medium">
                     <Link
                        href="/forgot-password"
                        className="underline underline-offset-2 text-blue-500 text-[12px]"
                     >
                        Forgot password
                     </Link>
                  </div> */}
                        <Input
                            type={isVisible ? "text" : "password"}
                            variant="bordered"
                            name="password"
                            label="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errorMessage={errors.password}
                            isInvalid={!!errors.password && touched.password}
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
                            size="sm"
                        />
                    </div>

                    {/* CAPTCHA */}
                    <div className="w-full mt-4">
                        <div className="flex items-center gap-3 ">
                            <label className="block text-sm font-medium bg-black text-white p-2 font-serif rounded-md no-select">
                                {captcha}
                            </label>
                            <span onClick={handleRefreshCaptcha}>  <IoReload /></span>
                            <Input
                                type="text"
                                variant="bordered"
                                value={captchaInput}
                                onChange={(e) => setCaptchaInput(e.target.value)}
                                errorMessage={captchaError}
                                isInvalid={Boolean(captchaError)}
                                className="w-full mt-2"
                                size="sm"
                            />
                        </div>


                        {/* <button
                     type="button"
                     onClick={handleRefreshCaptcha}
                     className="text-blue-500 mt-2"
                  >
                     Refresh CAPTCHA
                  </button> */}
                    </div>

                    <div className="flex gap-3 w-full my-5">
                        <Button
                            className="w-full bg-blue-500 text-white"
                            size="lg"
                            type="submit"
                            spinner={<Icon icon="line-md:loading-twotone-loop" fontSize={24} />}
                            isLoading={isSubmitting}
                        >
                         Proceed to Payment
                        </Button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default LoginForm;
