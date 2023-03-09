import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { IImage } from "../../contexts/AnnouncementContext.interfaces";
import { BodyText } from "../../styles/typography";
import { updateAnnouncementFormSchema } from "../../validators/updateAnnouncementFormSchema";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import { Select } from "../Select/style";
import Textarea from "../Textarea";
import { IUpdateAnnouncementFormProps } from "./interfaces";
import { Container } from "./style";
import { currencyMask, yearMask } from "../../masks";

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
    mode: "all",
    reValidateMode: "onChange",
  });

  const [values, setValues] = useState({
    year: announcement.year,
    price: announcement.price,
  });

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const addImageField = () => {
    imagesFields.push(imagesFields.length + 1);
    setImagesFields([...imagesFields]);
  };

  const [selectedTypeSale, setSelectedTypeSale] = useState<string>(
    announcement.typeSale
  );
  const [selectedTypeVehicle, setSelectedTypeVehicle] = useState<string>(
    announcement.typeVehicle
  );
  const [selectedIsActive, setSelectedIsActive] = useState<string>(
    announcement.isActive ? "true" : "false"
  );

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
          <Select
            id="typeSale"
            multiple
            {...register("typeSale")}
            value={[selectedTypeSale]}
            onChange={(event) => setSelectedTypeSale(event.target.value)}
          >
            <option value="sale">Venda</option>
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
            type="text"
            {...register("year")}
            value={yearMask(values.year)}
            onChange={inputChange}
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
          type="text"
          {...register("price")}
          value={currencyMask(values.price)}
          onChange={inputChange}
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
          <Select
            id="typeVehicle"
            multiple
            {...register("typeVehicle")}
            value={[selectedTypeVehicle]}
            onChange={(event) => setSelectedTypeVehicle(event.target.value)}
          >
            <option value="car">Carro</option>
            <option value="motorcycle">Moto</option>
          </Select>
          <span>{errors.typeVehicle?.message as string}</span>
        </div>

        <div className="selectContainer">
          <BodyText tag="p" style="body-2" weight="500" color="--color-grey0">
            Publicado
          </BodyText>
          <Select
            id="isActive"
            multiple
            {...register("isActive")}
            value={[selectedIsActive]}
            onChange={(event) => setSelectedIsActive(event.target.value)}
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
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
