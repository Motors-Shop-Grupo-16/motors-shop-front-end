import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { BodyText } from "../../styles/typography";
import { createAnnouncementFormSchema } from "../../validators/createAnnouncementFormSchema";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import { Select } from "../Select/style";
import Textarea from "../Textarea";
import { Container } from "./style";
import { currencyMask, yearMask } from "../../masks";

const CreateAnnouncementForm = () => {
  const [imagesFields, setImagesFields] = useState([1]);
  const { createAnnouncement, setIsCreateAnnouncement } =
    useContext(AnnouncementContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createAnnouncementFormSchema),
  });

  const [values, setValues] = useState({
    year: "",
    price: "0",
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

  const [selectedTypeSale, setSelectedTypeSale] = useState<string>("sale");
  const [selectedTypeVehicle, setSelectedTypeVehicle] = useState<string>("car");

  return (
    <Modal title="Criar anúncio" closeModal={setIsCreateAnnouncement}>
      <Container onSubmit={handleSubmit(createAnnouncement)}>
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
            id={`image${number}`}
            placeholder="Inserir URL da imagem"
            type="text"
            {...register(`image${number}`)}
            error={errors.images?.message as string}
            key={number}
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
            onClick={() => setIsCreateAnnouncement(false)}
          >
            Cancelar
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
            Criar anúncio
          </Button>
        </div>
      </Container>
    </Modal>
  );
};

export default CreateAnnouncementForm;
