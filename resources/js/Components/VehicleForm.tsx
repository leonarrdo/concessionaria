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

        axios.post('/manufacturer', files)
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
        <div className="container">
            <h1 className="text-6xl font-black text-center text-slate-900 mb-20">Cadastro de Veículo</h1>
        
        <form className="max-w-md border border-gray-200 rounded p-6 mx-auto" onSubmit={handleOnSubmit}>

          <div className="mb-5">
            <label htmlFor="file">Fotos do veículo</label>
            <input id="file" name="message" multiple type="file" onChange={handleOnChange} />
          </div>

          <button className="button" onClick={handleOnSubmit}>Cadastrar</button>

        </form>
        </div>
    );

}

export default VehicleForm;