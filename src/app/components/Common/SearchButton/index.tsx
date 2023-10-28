import React from "react";
import { StyledSearchButton } from "./style";

interface SearchButtonProps {
  title: string;
  color: string;
  onClick: () => void;
}

export default function SearchButton({
  title,
  color,
  onClick,
}: SearchButtonProps) {
  return (
    <>
      <StyledSearchButton
        sx={{ background: `${color}` }}
        onClick={onClick}
        variant="contained"
      >
        {title}
      </StyledSearchButton>
    </>
  );
}
