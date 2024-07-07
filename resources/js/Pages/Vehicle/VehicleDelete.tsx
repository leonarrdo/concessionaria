import { useEffect, useState } from 'react';
import ApplicationLayout from '@/Layouts/ApplicationLayout';
import axios from 'axios';
import { NumericFormat } from 'react-number-format';
import { PageProps } from '@/types';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Head } from '@inertiajs/react';

export default function VehicleDelete({ auth }: PageProps) {
    const vehicleImagePath = "http://localhost/vehicles/";
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

    const handleDeleteVehicle = (id: number) => {
        axios.post(`/vehicle/delete/${id}`)
            .then(response => {
                console.log(response.data);
                setVehicles(prevVehicles => prevVehicles.filter(vehicle => vehicle.id !== id));
                toast.success('Veículo deletado com sucesso.');
            })
            .catch(error => {
                console.error('Erro ao deletar veículo:', error.response.data);
                toast.error('Falha ao deletar o veículo.');
            });
    };

    return (
        <ApplicationLayout
            user={auth.user}
            header={<h2 className="font-bold text-xl leading-tight">Veículos</h2>}
        >
            <Head title="Deletar" />
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

            <div className="mx-auto">
                <h1 className="text-6xl font-black text-center text-slate-900 mb-2">
                    Deletar Veículos
                </h1>
                <p className="text-center">Escolha um veículo para ser removido.</p>
            </div>
            <div className="container mx-auto py-4 px-8">
                {vehicles.length === 0 ? (
                    <div className="flex justify-center items-center h-96">
                        <p className="text-xl text-black-500">Não há veículos para serem apresentados.</p>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-4 gap-4 mx-auto">
                        {vehicles.map(vehicle => (
                            <button
                                key={vehicle.id}
                                className="container h-72 rounded-lg border"
                                onClick={() => handleDeleteVehicle(vehicle.id)}
                            >
                                <div className="container h-52 rounded-lg">
                                    <div className="rounded-t-lg aspect-auto h-52 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${vehicleImagePath + vehicle.image})` }}>
                                    </div>
                                </div>
                                <div className="h-20 rounded-b-lg bg-white shadow md:shadow-lg">
                                    <div className="grid lg:grid-cols-1">
                                        <h3 className="font-bold line-clamp-1 text-center">{vehicle.manufacturer_name} - {vehicle.name}</h3>
                                        <p className="line-clamp-1 text-center">{vehicle.year} - <NumericFormat value={vehicle.odometer} suffix='KM' thousandSeparator="." decimalSeparator="," displayType={'text'} /></p>
                                        <NumericFormat className='font-bold line-clamp-1 text-center' value={vehicle.value} thousandSeparator="." decimalSeparator="," prefix={'R$'} displayType={'text'} />
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </ApplicationLayout>
    );
}
