import axios from "axios";
import { useEffect, useState } from "react";
import { DatePickerYear } from "./DatePickerYear";
import { FormProvider, useForm } from "react-hook-form";
import { ReactSelectVehicle } from "./ReactSelectVehicle";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Option = {
  value: string;
  label: string;
};

function VehicleForm() {
  const [files, setFiles] = useState<FileList>();
  const formMethods = useForm();
  const { register, handleSubmit, setValue } = formMethods;
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    axios
      .get("/manufacturer")
      .then((response) => {
        const data = response.data;
        const formattedOptions = data.map((item: { id: string; name: string }) => ({
          value: item.id,
          label: item.name,
        }));
        setOptions(formattedOptions);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
      });
  }, []);

  const onSubmit = async (data: any) => {
    if (!files) {
      alert("Por favor, adicione uma foto do veículo.");
      return;
    }

    const formData = new FormData();
    formData.append("file", files[0]);

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    try {
      const response = await axios.post("/vehicle/insert", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Resposta da API:", response.data);
      toast.success("Veículo cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast.error("Erro ao cadastrar veículo. Por favor, tente novamente.");
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
      <h1 className="text-6xl font-black text-center text-slate-900 mb-4">
        Cadastro de Veículos
      </h1>

      <FormProvider {...formMethods}>
        <form
          className="p-6 max-w-3xl border content-center bg-green-200 border-gray-200 rounded mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="block">
            <div className="block pb-1">
              <div>
                <label
                  htmlFor="manufacturer"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Fabricante do Veículo
                </label>
                <ReactSelectVehicle name="manufacturer" options={options} />
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
              Cadastrar
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default VehicleForm;
