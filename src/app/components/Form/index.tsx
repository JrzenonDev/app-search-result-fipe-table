"use client";

import React from "react";
import SearchButton from "../Common/SearchButton";
import { SelectAutoComplete } from "../Common/SelectAutoComplete";
import { StyledFormContainer, StyledSection } from "./style";

const button = {
  title: "Consultar preço",
  color: "#1E90FF",
};

const handleSearch = () => {
  console.log("search");
};

export function Form() {
  return (
    <StyledSection>
      <StyledFormContainer>
        <h1>Tabela Fipe</h1>
        <p>Consulte o valor de um veículo de forma gratuita</p>

        <form>
          <SelectAutoComplete />

          <SelectAutoComplete />

          <SearchButton
            onClick={handleSearch}
            title={button.title}
            color={button.color}
          />
        </form>
      </StyledFormContainer>
    </StyledSection>
  );
}
