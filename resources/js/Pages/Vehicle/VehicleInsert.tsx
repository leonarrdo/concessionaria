import VehicleForm from '@/Components/VehicleForm';
import { Head } from '@inertiajs/react';
import { PageProps, User } from '@/types';
import ApplicationLayout from '@/Layouts/ApplicationLayout';

export default function VehicleInsert({ auth }: PageProps) {
    return (
        <ApplicationLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cadastro de Veículos</h2>}
        >
            <div>
                <Head title="Inserir" />
                <div>
                    <VehicleForm>
                    </VehicleForm>
                </div>
            </div>

        </ApplicationLayout>
    );
}