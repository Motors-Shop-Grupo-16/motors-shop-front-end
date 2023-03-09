import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email: yup.string().email().required("Email obrigatório"),
  password: yup.string().required("Password obrigatório"),
});
