import * as yup from "yup";

export const createAnnouncementFormSchema = yup.object().shape({
  title: yup.string().required("Título obrigatório"),
  typeSale: yup
    .string()
    .required("Tipo da venda obrigatório")
    .transform((value) => value[0].replace(/["\\]/g, "")),
  year: yup.string().required("Ano obrigatório"),
  mileage: yup.string().required("Quilometragem obrigatória"),
  price: yup.string().required("Preço obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
  typeVehicle: yup
    .string()
    .transform((value) => value[0].replace(/["\\]/g, ""))
    .required("Tipo obrigatório"),
  coverImage: yup
    .string()
    .url("Deve ser uma URL válida")
    .required("Imagem obrigatória"),
  // images: yup.array().of(yup.string().url("Deve ser uma URL válida")),
});
