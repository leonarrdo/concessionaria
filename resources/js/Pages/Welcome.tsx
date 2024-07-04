import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import VehicleForm from '@/Components/VehicleForm';
import chevette from '../../images/chevette.jpg';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                        
                    </div>
                </div>
            </div>
            <div>
                <VehicleForm>
                </VehicleForm>
            </div>
            <div className="container mx-auto py-2 px-8">
                <div className="grid lg:grid-cols-3">
                    <div className="py-5 px-3 bg-orange-500">
                        <h2 className="px-1 text-xl font-bold mb-2 bg-lime-500">Titulo Teste</h2>
                        <img src={chevette} alt="" className="transition-transform" />
                        <p className="px-1">Descrição do veículo</p>
                    </div>
                    <div className="py-5 px-3 bg-orange-500">
                        <h2 className="px-1 text-xl font-bold mb-2 bg-lime-500">Titulo Teste</h2>
                        <img src={chevette} alt="" className="transition-transform" />
                        <p className="px-1">Descrição do veículo</p>
                    </div>
                    <div className="py-5 px-3 bg-orange-500">
                        <h2 className="px-1 text-xl font-bold mb-2 bg-lime-500">Titulo Teste</h2>
                        <img src={chevette} alt="" className="transition-transform" />
                        <p className="px-1">Descrição do veículo asdasd aaaaaa a a a          a  aaaaaaaaaaaaaaaa a a aaaaaaaaaa aaaaa a aaaaaaaaa</p>
                    </div>
                    <div className="py-5 px-3 bg-orange-500">
                        <h2 className="px-1 text-xl font-bold mb-2 bg-lime-500">Titulo Teste</h2>
                        <img src={chevette} alt="" className="transition-transform" />
                        <p className="px-1">Descrição do veículo asdasd aaaaaa a a a          a  aaaaaaaaaaaaaaaa a a aaaaaaaaaa aaaaa a aaaaaaaaa</p>
                    </div>
                    <div className="py-5 px-3 bg-orange-500">
                        <h2 className="px-1 text-xl font-bold mb-2 bg-lime-500">Titulo Teste</h2>
                        <img src={chevette} alt="" className="transition-transform" />
                        <p className="px-1">Descrição do veículo asdasd aaaaaa a a a          a  aaaaaaaaaaaaaaaa a a aaaaaaaaaa aaaaa a aaaaaaaaa</p>
                    </div>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
}