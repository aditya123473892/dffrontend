"use client";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import { SignupSchema } from "@/common/schemas";
import { Icon } from "@iconify/react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import toast from "react-hot-toast";
import { IoReload } from "react-icons/io5";

type Props = {
    onSubmit: (values: any) => Promise<any>;
    handleClose:any
};

const SignupForm = ({ onSubmit ,handleClose}: Props) => {
    const signupSchema = new SignupSchema();
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
            initialValues={signupSchema.initialValues}
            enableReinitialize={true}
            validationSchema={signupSchema.schema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                // Check CAPTCHA validity
                if (captchaInput !== captcha) {
                    setCaptchaError("Incorrect CAPTCHA. Please try again.");
                    return;
                }

                try {
                    await onSubmit(values);
                    resetForm();
                    generateCaptcha(); // Refresh CAPTCHA after successful submit
                    setCaptchaInput(""); // Clear CAPTCHA input
                } catch (error: any) {
                    console.log(error);
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
                setFieldValue,
            }) => (
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-2 gap-x-2 md:gap-x-5 gap-y-4 w-full"
                >
                    <Input
                        type="text"
                        variant="bordered"
                        name="firstName"
                        label="First name"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMessage={
                            Boolean(errors.firstName && touched.firstName)
                                ? errors.firstName
                                : ""
                        }
                        isInvalid={Boolean(errors.firstName && touched.firstName)}
                        className="w-full"
                        size="sm"
                    />

                    <Input
                        type="text"
                        variant="bordered"
                        name="lastName"
                        label="Last name"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMessage={
                            Boolean(errors.lastName && touched.lastName)
                                ? errors.lastName
                                : ""
                        }
                        isInvalid={Boolean(errors.lastName && touched.lastName)}
                        className="w-full"
                        size="sm"
                    />

                    <Input
                        type="number"
                        variant="bordered"
                        name="age"
                        label="Age"
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMessage={
                            Boolean(errors.age && touched.age) ? errors.age : ""
                        }
                        isInvalid={Boolean(errors.age && touched.age)}
                        className="w-full"
                        size="sm"
                    />

                    <Select
                        label="Gender"
                        variant="bordered"
                        size="sm"
                        name="gender"
                        value={values.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMessage={
                            Boolean(errors.gender && touched.gender)
                                ? errors.gender
                                : ""
                        }
                        isInvalid={Boolean(errors.gender && touched.gender)}
                    >
                        {selectOption.map((option) => (
                            <SelectItem key={option} value={option}>
                                {option}
                            </SelectItem>
                        ))}
                    </Select>

                    <Input
                        type="text"
                        variant="bordered"
                        name="phoneNumber"
                        label="Phone number"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMessage={
                            Boolean(errors.phoneNumber && touched.phoneNumber)
                                ? errors.phoneNumber
                                : ""
                        }
                        isInvalid={Boolean(errors.phoneNumber && touched.phoneNumber)}
                        className="w-full col-span-2"
                        size="sm"
                        autoComplete="false"
                    />

                    <Input
                        type="text"
                        variant="bordered"
                        name="username"
                        label="Email"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMessage={
                            Boolean(errors.username && touched.username)
                                ? errors.username
                                : ""
                        }
                        isInvalid={Boolean(errors.username && touched.username)}
                        className="w-full col-span-2"
                        size="sm"
                    />

                    <Input
                        type={isVisible ? "text" : "password"}
                        variant="bordered"
                        name="password"
                        label="Enter Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMessage={
                            Boolean(errors.password && touched.password)
                                ? errors.password
                                : ""
                        }
                        isInvalid={Boolean(errors.password && touched.password)}
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

                    <Input
                        type={isVisible ? "text" : "password"}
                        variant="bordered"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorMessage={
                            Boolean(errors.confirmPassword && touched.confirmPassword)
                                ? errors.confirmPassword
                                : ""
                        }
                        isInvalid={Boolean(
                            errors.confirmPassword && touched.confirmPassword
                        )}
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

                    {/* CAPTCHA */}
                    <div className="col-span-2">
                        <div className="flex items-baseline gap-3 ">
                            <label className="block text-sm font-medium bg-black text-white p-2 font-serif rounded-md no-select">
                                {captcha}
                            </label>                                  <span onClick={handleRefreshCaptcha}>  <IoReload /></span>
                            <Input
                                type="text"
                                variant="bordered"
                                value={captchaInput}
                                onChange={(e) => setCaptchaInput(e.target.value)}
                                errorMessage={captchaError}
                                isInvalid={Boolean(captchaError)}
                                className="w-full mt-2"
                                size="sm"
                            /></div>

                        {/* <button
                     type="button"
                     onClick={handleRefreshCaptcha}
                     className="text-blue-500 mt-2"
                  >
                     Refresh CAPTCHA
                  </button> */}
                    </div>

                    <Button
                        className="w-full bg-blue-500 text-white col-span-2 mt-5"
                        size="lg"
                        type="submit"
                        spinner={<Icon icon="line-md:loading-twotone-loop" fontSize={24} />}
                        isLoading={isSubmitting}
                    >
                        Sign Up
                    </Button>
                    <button  className="w-full border border-blue-500 text-blue-500 col-span-2 h-[48px]  rounded-xl" onClick={handleClose}>
Cancel
                    </button>
                </form>
            )}
        </Formik>
    );
};

export default SignupForm;

const selectOption = ["Male", "Female", "Others", "Couples"];
