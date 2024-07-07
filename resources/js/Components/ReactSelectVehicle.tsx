import { Option, Props } from "@/types";
import { Controller, useFormContext } from "react-hook-form";
import ReactSelect from "react-select";

interface ReactSelectVehicleProps extends Props {
  onChange?: (selectedOption: Option | null) => void;
}

export function ReactSelectVehicle({ name, options, onChange }: ReactSelectVehicleProps) {
  const { control, setValue, watch } = useFormContext();
  const vehicleValue = watch(name); 

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange: controllerOnChange, value } }) => (
        <ReactSelect
          value={options.find(option => option.value === value)}
          onChange={(option) => {
            if (option) {
              controllerOnChange(option.value);
              if (onChange) {
                onChange(option as Option);
              }
            }
          }}
          options={options}
        />
      )}
    />
  );
}
