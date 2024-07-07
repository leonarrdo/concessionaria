import { ChangeEvent } from "react";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface VehicleInsertForm {
    manufacturer: number;
    name: string;
    year: number;
    value: number;
    odometer: number;
    photo: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export type SelectOption = {
    label: string;
    value: number;
};

export type DatePickerProps = {
    name: string;
    value?: string;
    label?: string;
    disabled?: boolean;
    className?: string;
};

type Option = {
    value: string;
    label: string;
};

type Props = {
    name: string;
    options: Option[];
}