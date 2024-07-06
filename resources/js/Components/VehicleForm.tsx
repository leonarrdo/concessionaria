import axios from "axios";
import { useState } from "react";


function VehicleForm({  }) {

    const [state, setState]     = useState('ready');
    const [files, setFiles]     = useState <FileList > ();

    async function handleOnSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        if (typeof files === 'undefined'){
            return;
        }

        const formData = new FormData();

        formData.append('name', 't3este');
        formData.append('file', files[0]);
        formData.append('file', files[0]);
        formData.append('file', files[0]);
        formData.append('file', files[0]);
        formData.append('file', files[0]);
        formData.append('file', files[0]);
        formData.append('file', files[0]);
        formData.append('file', files[0]);

        axios.post('/vehicle/insert', formData)
        .then(response => {
            console.log(JSON.stringify(response.data));
        })
        .catch(error => {
            console.log("ERROR:: ", error.response.data)
        });

        setState('sent');
    }

    async function handleOnChange(e: React.FormEvent<HTMLInputElement>){
        const target = e.target as HTMLInputElement & {
            files: FileList;
        }

        setFiles(target.files);
    }
    
    return(
        <div className="py-4 content-center">
            <h1 className="text-6xl font-black text-center text-slate-900 mb-20">Cadastro de Veículos</h1>
            <form className="p-6 max-w-3xl border content-center bg-green-200 border-gray-200 rounded mx-auto" onSubmit={handleOnSubmit}>
                <div className="py-1">
                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Nome do Veículo
                    </label>
                    <div className="block pb-1">
                        <input
                        id="name"
                        name="name"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="block">
                    <label htmlFor="model" className="block text-sm font-semibold leading-6 text-gray-900">
                        Modelo do Veículo
                    </label>
                    <div className="block pb-1">
                        <input
                        id="model"
                        name="model"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="block">
                    <label htmlFor="year" className="block text-sm font-semibold leading-6 text-gray-900">
                        Ano do Veículo
                    </label>
                    <div className="block pb-1">
                        <input
                        id="year"
                        name="year"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="block">
                    <label htmlFor="manufacturer" className="block text-sm font-semibold leading-6 text-gray-900">
                        Fabricante do Veículo
                    </label>
                    <div className="block pb-1">
                        <input
                        id="manufacturer"
                        name="manufacturer"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="block">
                    <label htmlFor="color" className="block text-sm font-semibold leading-6 text-gray-900">
                        Cor do Veículo
                    </label>
                    <div className="block pb-1">
                        <input
                        id="color"
                        name="color"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="block">
                    <label htmlFor="value" className="block text-sm font-semibold leading-6 text-gray-900">
                        Valor do Veículo
                    </label>
                    <div className="block pb-1">
                        <input
                        id="value"
                        name="value"
                        type="text"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="block">
                    <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">
                        Descrição
                    </label>
                    <div className="block pb-1">
                        <textarea
                        id="description"
                        name="description"
                        className="resize-none block w-full h-44 rounded-md border-0 text-gray-900 "
                        />
                    </div>
                </div>
                <label className="block pb-10">
                    <label htmlFor="file" className="block text-sm font-semibold leading-6 text-gray-900">
                        Foto do Veículo
                    </label>
                    <input type="file" id="file" name="file" onChange={handleOnChange} className="block w-full font-semibold text-sm file:mr-4 file:py-2 file:bg-white file:px-4 file:border-0 file:text-sm file:font-semibold"/>
                </label>
                <div className="grid content-center">
                    <button className="p-2 py-4 button bg-white rounded-md" onClick={handleOnSubmit}>Cadastrar</button>
                </div>
            </form>
        </div>
    );

}

export default VehicleForm;