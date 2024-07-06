import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { NumericFormat } from 'react-number-format';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Dashboard({ auth}: PageProps) {

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
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
                <div className="container mx-auto py-8 px-8">
                    <div className="grid lg:grid-cols-4 gap-4 mx-auto">
                        {vehicles.map(vehicle => (
                            <button className="container h-72 rounded-lg border" key={vehicle.id}>
                                <div className="container h-52 rounded-lg">
                                    <div className="rounded-t-lg aspect-auto h-52 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${vehicleImagePath+vehicle.image})`}}>
                                    </div>
                                </div>
                                <div className="h-20 rounded-b-lg bg-white shadow md:shadow-lg">
                                    <div className="grid lg:grid-cols-1">
                                        <h3 className="font-bold line-clamp-1 text-center">{vehicle.manufacturer_name} - {vehicle.name}</h3>
                                        <p className="line-clamp-1 text-center">{vehicle.year} - <NumericFormat  value={vehicle.odometer} suffix='KM' thousandSeparator="." decimalSeparator="," displayType={'text'}/></p>
                                        <NumericFormat className='font-bold line-clamp-1 text-center' value={vehicle.value} thousandSeparator="." decimalSeparator="," prefix={'R$'} displayType={'text'}/>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}