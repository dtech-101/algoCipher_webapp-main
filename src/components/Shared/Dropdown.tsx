import { Placeholder } from "phosphor-react";
import { Select } from "./Inputs";
import { MenuItem, SxProps } from "@mui/material";
import { Theme } from "react-toastify";

export interface IDropdownOption {
    key: string,
    value: string
}

interface IDropdownProps {
    options: IDropdownOption[],
    inputName: string,
    onChange: (name: string, value: string) => void,
    selected?: IDropdownOption,
    placeholder?: string,
    sx?: SxProps | undefined
}
export const Dropdown = ({
    options,
    onChange,
    selected,
    placeholder,
    inputName,
    sx
}: IDropdownProps) => {
    return (
        <Select
            sx={sx}
            value={selected?.key ? selected.key : placeholder ? placeholder : ''}
            onChange={(e) => onChange(inputName, e.target.value)}
        >
            {
                placeholder &&
                <option disabled value='placeholder' key='place_holder'>
                    <span style={{
                        textTransform: 'capitalize'
                    }}>{placeholder}</span>
                </option>
            }
            {
                options.map((option) =>
                    <option value={option.key} key={`key_${option.key}`}>
                        <span style={{
                            textTransform: 'capitalize'
                        }}>{option.value}</span>
                    </option>)
            }
        </Select>
    );
};