import * as Yup from "yup";

const loginSchema = Yup.object({
    email: Yup
    .string()
    .required("Enter a valid Email")
    .email(),
    password: Yup
    .string()
    .required("Enter a password")
});