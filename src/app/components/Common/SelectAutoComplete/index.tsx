"use client";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface CarInfo {
  codigo: number;
  nome: string;
}

interface SelectAutoCompleteProps {
  carInfo: CarInfo[];
  onSelection: (option: CarInfo | null, titleLabel: string) => void;
  titleLabel: string;
  isVisible?: boolean;
}

export function SelectAutoComplete(props: SelectAutoCompleteProps) {
  const handleSelectedOption = (option: CarInfo | null) => {
    props.onSelection(option, props.titleLabel); // update state use function callback
    console.log("what was selected", option);
  };

  return props.isVisible ? ( // Verifique se isVisible é verdadeiro antes de renderizar o Autocomplete
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.carInfo}
      getOptionLabel={(car) => car.nome}
      onChange={(_event, newValue) => {
        if (newValue === null || typeof newValue === "object") {
          handleSelectedOption(newValue as CarInfo | null);
        }
      }}
      sx={{ width: 400, marginBottom: "1rem" }}
      renderInput={(params) => (
        <TextField {...params} label={props.titleLabel} />
      )}
    />
  ) : null;
}
