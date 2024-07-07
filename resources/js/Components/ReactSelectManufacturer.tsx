import { Option, Props } from "@/types";
import { Controller, useFormContext } from "react-hook-form";
import ReactSelect from "react-select";

export function ReactSelectManufacturer({ name, options }: Props) {
    const { control } = useFormContext();
    return (
        <Controller 
            name={name}
            control={control} 
            render={({ field: { onChange, value } }) => (
                <ReactSelect
                    value={options.find(option => option.value === value)}
                    onChange={(option) => onChange((option as Option).value)}
                    options={options}
                />
            )}
        />
    );
};