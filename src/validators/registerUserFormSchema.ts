import { isDate, parse } from "date-fns";
import * as yup from "yup";

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
  password: yup
    .string()
    .required("Senha é obrigatório")
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required("Comfirmar senha é obrigatório"),
  cpf: yup
    .string()
    .min(14, "CPF precisa ser no formato 000.000.000-00")
    .required("CPF é obrigatório"),
  phone: yup
    .string()
    .min(14, "Telefone precisa ser no formato (00) 0000-0000")
    .required("Telefone é obrigatório"),
  dateOfBirth: yup
    .date()
    .typeError("Data precisa ser no formato YYYY-MM-DD")
    .transform(parseDateString)
    .max(today, "Data não pode ser superior ao dia atual"),
  description: yup.string().required("Descrição é obrigatória"),
  cep: yup
    .string()
    .min(9, "Cep precisa ter o formato 00000-000")
    .required("CEP é obrigatório"),
  address: yup.object().shape({
    state: yup.string().required("Estado é obrigatório"),
    city: yup.string().required("Cidade é obrigatório"),
    road: yup.string().required("Rua é obrigatório"),
    number: yup.string().required("Número é obrigatório"),
    complement: yup.string().notRequired(),
  }),
  isBuyer: yup
    .string()
    .transform((value) => value[0].replace(/["\\]/g, ""))
    .required("Tipo obrigatório"),
});
