import * as yup from "yup";
import { parse, isDate } from "date-fns";

function parseDateString(value: string, originalValue: string) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
}
const today = new Date();

export const editUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email().required("Email é obrigatório"),
  cpf: yup.string().required("CPF é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  dateOfBirth: yup
    .date()
    .typeError("Esperado data 2000-02-29")
    .transform(parseDateString)
    .max(today, "Data não pode ser superior ao dia atual"),
  description: yup.string().required("Descrição é obrigatória"),
});
