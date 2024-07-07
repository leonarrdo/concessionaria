import { NumericFormat } from 'react-number-format';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ApplicationLayout from '@/Layouts/ApplicationLayout';

export default function WelcomePage({ auth}: PageProps) {

    const vehicleImagePath = "http://localhost/vehicles/";
    const [vehicles, setVehicles] = useState(Array<Vehicle>);

    useEffect(() => {
        getVehicles();
      }, [])
    
    const getVehicles = () => {
        axios.get('/vehicle')
        .then(response => {
            console.log(response.data);
            setVehicles(response.data);
        })
        .catch(error => {
            console.log("ERROR:: ", error.response.data)
        });
    }

    return (
        <ApplicationLayout
            user={auth.user}
            header={<h2 className="font-bold text-xl leading-tight">Veículos</h2>}
        >
            <Head title="Home" />
            <div className="container mx-auto py-8 px-8">
                {vehicles.length === 0 ? (
                    <div className="flex justify-center items-center h-96">
                        <p className="text-xl text-black-500">Não há veículos para serem apresentados.</p>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-4 gap-4 mx-auto">
                        {vehicles.map(vehicle => (
                            <button className="container h-72 rounded-lg border" key={vehicle.id}>
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