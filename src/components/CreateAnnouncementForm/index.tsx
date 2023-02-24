import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./style";
import { createAnnouncementFormSchema } from "../../validators/createAnnouncementFormSchema";
import Input from "../Input";
import Textarea from "../Textarea";
import { useState } from "react";
import { BodyText } from "../../styles/typography";
import { Select } from "../Select/style";
import Modal from "../Modal";

const CreateAnnouncementForm = () => {
  const [imagesFields, setImagesFields] = useState([1]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createAnnouncementFormSchema),
  });

  return (
    <Modal title="Criar anúncio">
      <Container>
        <div className="selectContainer">
          <BodyText tag="p" style="body-2" weight="500" color="--color-grey0">
            Tipo de anúncio
          </BodyText>
          <Select id="typeSale" multiple {...register("typeSale")}>
            <option value="sale" selected>
              Venda
            </option>
            <option value="auction">Leilão</option>
          </Select>
          <span>{errors.typeSale?.message as string}</span>
        </div>

        <BodyText tag="p" style="body-2" weight="500" color="--color-grey0">
          Informações do veículo
        </BodyText>
        <Input
          label="Título"
          id="title"
          placeholder="Digitar título"
          type="text"
          {...register("title")}
          error={errors.title?.message as string}
        />

        <Input
          label="Ano"
          id="yaer"
          placeholder="Digitar ano"
          type="text"
          {...register("year")}
          error={errors.year?.message as string}
        />

        <Input
          label="Quilometragem"
          id="mileage"
          placeholder="0"
          type="text"
          {...register("mileage")}
          error={errors.mileage?.message as string}
        />

        <Input
          label="Preço"
          id="price"
          placeholder="Digitar preço"
          type="text"
          {...register("price")}
          error={errors.price?.message as string}
        />

        <Textarea
          label="Descrição"
          id="description"
          placeholder="Digitar descrição"
          {...register("description")}
          error={errors.description?.message as string}
        />

        <div className="selectContainer">
          <BodyText tag="p" style="body-2" weight="500" color="--color-grey0">
            Tipo de veículo
          </BodyText>
          <Select id="typeVehicle" multiple {...register("typeVehicle")}>
            <option value="car" selected>
              Carro
            </option>
            <option value="motorcycle">Moto</option>
          </Select>
          <span>{errors.typeVehicle?.message as string}</span>
        </div>

        <Input
          label="Imagem da capa"
          id="coverImage"
          placeholder="Inserir URL da imagem"
          type="text"
          {...register("coverImage")}
          error={errors.coverImage?.message as string}
        />

        {imagesFields.map((number) => (
          <Input
            label={`${number}ª imagem da galeria`}
            id="images"
            placeholder="Inserir URL da imagem"
            type="text"
            {...register("images")}
            error={errors.images?.message as string}
          />
        ))}
      </Container>
    </Modal>
  );
};

export default CreateAnnouncementForm;
