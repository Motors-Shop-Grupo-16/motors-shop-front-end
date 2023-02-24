import * as yup from "yup";

export const createAnnouncementFormSchema = yup.object().shape({
  fullName: yup.string().required("Nome obrigatório"),
  title: yup.string().required("Título obrigatório"),
  typeSale: yup.string().required("Tipo da venda obrigatório"),
  year: yup.string().required("Ano obrigatório"),
  mileage: yup.string().required("Quilometragem obrigatória"),
  price: yup.string().required("Preço obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
  typeVehicle: yup.string().required("Tipo obrigatório"),
  coverImage: yup
    .string()
    .url("Deve ser uma URL válida")
    .required("Imagem obrigatória"),
  images: yup.array().of(yup.string().url("Deve ser uma URL válida")),
});
