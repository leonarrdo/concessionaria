import { Controller, useFormContext } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  name: string;
};

export function DatePickerYear({ name }: Props) {
    const { control } = useFormContext();
    return (
        <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
            <DatePicker
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            selected={value ? new Date(value, 0, 1) : null}
            onChange={(date: Date | null) => {
                if (date) {
                const year = date.getUTCFullYear();
                onChange(year.toString());
                } else {
                onChange('');
                }
            }}
            showYearPicker
            dateFormat="yyyy"
            />
        )}
        />
    );
}