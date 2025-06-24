"use client";

import { Controller, Control } from "react-hook-form";
import DropdownMenu from "@/components/Dropdown/DropdownMenu";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface DropdownProps {
  name: string;
  control: Control<any>;
  label: string;
  options: Readonly<string[]>;
}

export function Dropdown({ name, control, label, options }: DropdownProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <DropdownMenu label={label}>
          <div className="flex flex-col gap-2">
            {options.map((option) => (
              <Label key={option} className="flex items-center gap-2">
                <Checkbox
                  checked={field.value?.includes(option)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      field.onChange([...(field.value || []), option]);
                    } else {
                      field.onChange(
                        (field.value || []).filter((val) => val !== option)
                      );
                    }
                  }}
                />
                {option}
              </Label>
            ))}
          </div>
        </DropdownMenu>
      )}
    />
  );
}
