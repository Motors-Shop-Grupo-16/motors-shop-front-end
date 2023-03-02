import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./style";
import Input from "../Input";
import Textarea from "../Textarea";
import { useContext, useState } from "react";
import { BodyText } from "../../styles/typography";
import { Select } from "../Select/style";
import Modal from "../Modal";
import Button from "../Button";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { IUpdateAnnouncementFormProps } from "./interfaces";
import { updateAnnouncementFormSchema } from "../../validators/updateAnnouncementFormSchema";
import { IImage } from "../../contexts/AnnouncementContext.interfaces";

const UpdateAnnouncementForm = ({
  announcement,
}: IUpdateAnnouncementFormProps) => {
  const [imagesFields, setImagesFields] = useState<Array<number | IImage>>(
    announcement.images
  );
  const { updateAnnouncement, setIsUpdateAnnouncement, confirmDeletion } =
    useContext(AnnouncementContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateAnnouncementFormSchema),
  });

  const addImageField = () => {
    imagesFields.push(imagesFields.length + 1);
    setImagesFields([...imagesFields]);
  };

  return (
    <Modal title="Editar anúncio" closeModal={setIsUpdateAnnouncement}>
      <Container
        onSubmit={handleSubmit((data) =>
          updateAnnouncement(data, announcement.id)
        )}
      >
        <div className="selectContainer">
          <BodyText tag="p" style="body-2" weight="500" color="--color-grey0">
            Tipo de anúncio
          </BodyText>
          <Select id="typeSale" multiple {...register("typeSale")}>
            <option
              value="sale"
              selected={announcement.typeSale == "sale" ? true : false}
            >
              Venda
            </option>
            <option
              value="auction"
              selected={announcement.typeSale == "auction" ? true : false}
            >
              Leilão
            </option>
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
          defaultValue={announcement.title}
          type="text"
          {...register("title")}
          error={errors.title?.message as string}
        />

        <div className="smallInputs">
          <Input
            label="Ano"
            id="year"
            placeholder="Digitar ano"
            defaultValue={announcement.year}
            type="text"
            {...register("year")}
            error={errors.year?.message as string}
          />

          <Input
            label="Quilometragem"
            id="mileage"
            placeholder="0"
            defaultValue={announcement.mileage}
            type="text"
            {...register("mileage")}
            error={errors.mileage?.message as string}
          />
        </div>

        <Input
          label="Preço"
          id="price"
          placeholder="Digitar preço"
          defaultValue={announcement.price}
          type="text"
          {...register("price")}
          error={errors.price?.message as string}
        />

        <Textarea
          label="Descrição"
          id="description"
          placeholder="Digitar descrição"
          defaultValue={announcement.description}
          {...register("description")}
          error={errors.description?.message as string}
        />

        <div className="selectContainer">
          <BodyText tag="p" style="body-2" weight="500" color="--color-grey0">
            Tipo de veículo
          </BodyText>
          <Select id="typeVehicle" multiple {...register("typeVehicle")}>
            <option
              value="car"
              selected={announcement.typeVehicle == "car" ? true : false}
            >
              Carro
            </option>
            <option
              value="motorcycle"
              selected={announcement.typeVehicle == "motorcycle" ? true : false}
            >
              Moto
            </option>
          </Select>
          <span>{errors.typeVehicle?.message as string}</span>
        </div>

        <div className="selectContainer">
          <BodyText tag="p" style="body-2" weight="500" color="--color-grey0">
            Publicado
          </BodyText>
          <Select id="isActive" multiple {...register("isActive")}>
            <option value="true" selected={announcement.isActive}>
              Sim
            </option>
            <option value="false" selected={!announcement.isActive}>
              Não
            </option>
          </Select>
          <span>{errors.isActive?.message as string}</span>
        </div>

        <Input
          label="Imagem da capa"
          id="coverImage"
          placeholder="Inserir URL da imagem"
          defaultValue={announcement.coverImage}
          type="text"
          {...register("coverImage")}
          error={errors.coverImage?.message as string}
        />

        {imagesFields.map((image, index) => (
          <Input
            label={`${index + 1}ª imagem da galeria`}
            id={`image${index + 1}`}
            placeholder="Inserir URL da imagem"
            defaultValue={typeof image == "object" ? image.url : undefined}
            type="text"
            {...register(`image${index + 1}`)}
            error={errors.images?.message as string}
            key={index + 1}
          />
        ))}

        <Button
          type="button"
          width="fit-content"
          backgroundColor="--color-brand4"
          color="--color-brand1"
          borderLength="0"
          borderColor="transparent"
          onClick={addImageField}
        >
          Adicionar campo para imagem da galeria
        </Button>

        <div className="submitButtonContainer">
          <Button
            type="button"
            width="fit-content"
            buttonText="Big"
            backgroundColor="--color-grey6"
            color="--color-grey2"
            borderColor="transparent"
            borderLength="0"
            onClick={() => confirmDeletion(announcement.id)}
          >
            Excluir anúncio
          </Button>

          <Button
            type="submit"
            width="fit-content"
            buttonText="Big"
            backgroundColor="--color-brand1"
            color="--color-whiteFixed"
            borderLength="0"
            borderColor="transparent"
          >
            Editar anúncio
          </Button>
        </div>
      </Container>
    </Modal>
  );
};

export default UpdateAnnouncementForm;
