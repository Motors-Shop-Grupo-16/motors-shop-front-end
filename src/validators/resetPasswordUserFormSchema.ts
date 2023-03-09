import * as yup from "yup";

export const resetPasswordUserFormSchema = yup.object().shape({
  password: yup
    .string()
    .required("Senha é obrigatório")
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required("Comfirmar senha é obrigatório"),
});
