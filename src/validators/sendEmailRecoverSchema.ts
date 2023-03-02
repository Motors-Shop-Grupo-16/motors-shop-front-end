import * as yup from "yup";

export const sendEmailRecoverSchema = yup.object().shape({
  email: yup.string().email().required("Email obrigatório"),
});
