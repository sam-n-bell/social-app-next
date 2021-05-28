import * as Yup from "yup";

export const loginForm = Yup.object({
    email: Yup
    .string()
    .required("Enter a valid Email")
    .email(),
    password: Yup
    .string()
    .required("Enter a password")
});