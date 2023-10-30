import React from "react";
import { StyledSearchButton } from "./style";

interface SearchButtonProps {
  color: string;
  onClick: () => void;
  enable: boolean;
}

export default function SearchButton({
  color,
  onClick,
  enable,
}: SearchButtonProps) {
  return (
    <>
      <StyledSearchButton
        sx={{ background: `${color}` }}
        onClick={onClick}
        variant="contained"
        disabled={enable}
      >
        Consultar preço
      </StyledSearchButton>
    </>
  );
}
