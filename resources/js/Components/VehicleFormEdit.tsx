import axios from "axios";
import { useEffect, useState } from "react";
import { DatePickerYear } from "./DatePickerYear";
import { FormProvider, useForm } from "react-hook-form";
import { ReactSelectManufacturer } from "./ReactSelectManufacturer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactSelectVehicle } from "./ReactSelectVehicle";

type Option = {
  value: string;
  label: string;
};

interface Vehicle {
  id: string;
  manufacturer_id: string;
  name: string;
  value: string;
  odometer: string;
  year: string;
  file: string;
}

function VehicleFormEdit() {
  const [files, setFiles] = useState<FileList>();
  const formMethods = useForm();
  const { register, handleSubmit, setValue, reset, control } = formMethods;
  const [manufacturerOptions, setManufacturerOptions] = useState<Option[]>([]);
  const [vehicleOptions, setVehicleOptions] = useState<Option[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  useEffect(() => {
    getManufacturers();
    getVehicles();
  }, []);

  function getManufacturers() {
    axios
      .get("/manufacturer")
      .then((response) => {
        const data = response.data;
        const formattedOptions = data.map((item: { id: string; name: string }) => ({
          value: item.id,
          label: item.name,
        }));
        setManufacturerOptions(formattedOptions);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
      });
  }

  function getVehicles() {
    axios
      .get("/vehicle")
      .then((response) => {
        const data = response.data;
        const formattedOptions = data.map((item: { id: string; name: string }) => ({
          value: item.id,
          label: item.name,
        }));
        setVehicleOptions(formattedOptions);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
      });
  }

  const handleVehicleChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      axios.get(`/vehicle/${selectedOption.value}`)
        .then((response) => {
          const vehicleData = response.data;
          setSelectedVehicle(vehicleData);
          setValue("manufacturer", vehicleData.manufacturer_id);
          reset(vehicleData);
        })
        .catch((error) => {
          toast.error("Erro ao buscar dados do veículo.");
        });
    } else {
      setSelectedVehicle(null);
      reset();
    }
  };

  const onSubmit = async (data: any) => {
    if (!selectedVehicle) {
      toast.error("Selecione um veículo para editar.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", files ? files[0] : selectedVehicle.file);
  
    formData.append("id", selectedVehicle.id);
    formData.append("name", data.name);
    formData.append("value", data.value);
    formData.append("odometer", data.odometer);
    formData.append("year", data.year);
    formData.append("manufacturer_id", data.manufacturer_id);
  
    try {
      const response = await axios.post("/vehicle/edicao", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Resposta da API:", response.data);
      toast.success("Veículo atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast.error("Erro ao atualizar veículo. Por favor, tente novamente.");
    }
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    setFiles(target.files);
  };

  return (
    <div className="py-4 content-center">
      <ToastContainer />

      <div className="mx-auto">
        <h1 className="text-6xl font-black text-center text-slate-900 mb-2">
          Editar Veículos
        </h1>
        <p className="text-center pb-4">Escolha um veículo para ser editado.</p>
      </div>

      <FormProvider {...formMethods}>
        <form
          className="p-6 max-w-3xl border content-center border-gray-500 shadow rounded mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="block">
            <div className="block pb-1">
              <div>
                <label
                  htmlFor="vehicle"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Veículo
                </label>
                <ReactSelectVehicle name="vehicle" options={vehicleOptions} onChange={handleVehicleChange} />
              </div>
            </div>
          </div>
          <div className="block">
            <div className="block pb-1">
              <div>
                <label
                  htmlFor="manufacturer"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Fabricante do Veículo
                </label>
                <ReactSelectManufacturer name="manufacturer" options={manufacturerOptions} />
              </div>
            </div>
          </div>
          <div className="block">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Modelo do Veículo
            </label>
            <div className="block pb-1">
              <input
                {...register("name")}
                id="name"
                name="name"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="block">
            <label
              htmlFor="value"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Valor do Veículo
            </label>
            <div className="block pb-1">
              <input
                {...register("value")}
                id="value"
                name="value"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="block">
            <label
              htmlFor="odometer"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Quilometragem
            </label>
            <div className="block pb-1">
              <input
                {...register("odometer")}
                id="odometer"
                name="odometer"
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="block">
            <label
              htmlFor="year"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Ano do Veículo
            </label>
            <div className="block pb-1">
              <DatePickerYear name="year" />
            </div>
          </div>
          <label className="block pb-10">
            <label
              htmlFor="file"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Foto do Veículo
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleOnChange}
              className="block w-full font-semibold text-sm file:mr-4 file:py-2 file:bg-white file:px-4 file:border-0 file:text-sm file:font-semibold"
            />
          </label>
          <div className="grid content-center">
            <button className="p-2 py-4 button bg-white rounded-md">
              Atualizar
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default VehicleFormEdit;
