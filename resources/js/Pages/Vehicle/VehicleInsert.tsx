import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import VehicleForm from '@/Components/VehicleForm';
import { Head } from '@inertiajs/react';
import { PageProps, User } from '@/types';
import { useState, PropsWithChildren, ReactNode } from 'react';

export default function VehicleInsert({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cadastro de Veículos</h2>}
        >
            <div>
                <Head title="Dashboard" />
                <div>
                    <VehicleForm>
                    </VehicleForm>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}