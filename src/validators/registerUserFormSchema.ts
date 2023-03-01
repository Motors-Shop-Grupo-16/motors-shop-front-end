import * as yup from "yup";
import { parse, isDate } from "date-fns";

function parseDateString(value: string, originalValue: string) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
}
const today = new Date();

export const registerUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email().required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required("Comfirmar senha é obrigatório"),
  cpf: yup.string().required("CPF é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  dateOfBirth: yup
    .date()
    .typeError("Esperado data 2000-02-29")
    .transform(parseDateString)
    .max(today),
  description: yup.string().required("Descrição é obrigatória"),
  cep: yup.string().required("CEP é obrigatório"),
  address: yup.object().shape({
    state: yup.string().required("Estado é obrigatório"),
    city: yup.string().required("Cidade é obrigatório"),
    road: yup.string().required("Rua é obrigatório"),
    number: yup.string().required("Número é obrigatório"),
    complement: yup.string().required("Complemento é obrigatório"),
  }),
  isBuyer: yup
    .string()
    .transform((value) => value[0].replace(/["\\]/g, ""))
    .required("Tipo obrigatório"),
});
