import { useEffect, useState } from 'react';
import ApplicationLayout from '@/Layouts/ApplicationLayout';
import axios from 'axios';
import { NumericFormat } from 'react-number-format';
import { PageProps } from '@/types';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VehicleForm from '@/Components/VehicleForm';
import VehicleInsert from './VehicleInsert';
import VehicleFormEdit from '@/Components/VehicleFormEdit';
import { Head } from '@inertiajs/react';

export default function VehicleEditPage({ auth }: PageProps) {
    const [vehicles, setVehicles] = useState<Array<Vehicle>>([]);

    useEffect(() => {
        getVehicles();
    }, []);

    const getVehicles = () => {
        axios.get('/vehicle')
            .then(response => {
                console.log(response.data);
                setVehicles(response.data);
            })
            .catch(error => {
                console.log("ERROR:: ", error.response.data);
            });
    };

    return (
        <ApplicationLayout
            user={auth.user}
            header={<h2 className="font-bold text-xl leading-tight">Veículos</h2>}
        >
            <Head title="Editar" />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false} 
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className="container mx-auto py-4 px-8">
                {vehicles.length === 0 ? (
                    <div className="flex justify-center items-center h-96">
                        <p className="text-xl text-black-500">Não há veículos para serem apresentados.</p>
                    </div>
                ) : (
                    <div>
                       <VehicleFormEdit></VehicleFormEdit>
                    </div>
                )}
            </div>
            
        </ApplicationLayout>
    );
}
