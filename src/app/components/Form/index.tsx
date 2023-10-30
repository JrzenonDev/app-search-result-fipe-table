"use client";

import React, { useEffect, useState } from "react";

import SearchButton from "../Common/SearchButton";
import { SelectAutoComplete } from "../Common/SelectAutoComplete";
import { StyledFormContainer, StyledSection } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { selectBrand, selectModel, selectYear } from "@/redux/actions";
import { RootState } from "@/redux/reducers";
import {
  fetchCarModels,
  fetchCarPrice,
  fetchCarYears,
} from "@/app/hooks/fetchData";
import { updateModels } from "@/redux/carActions";

interface CarInfo {
  codigo: number;
  nome: string;
}

interface CarModel {
  codigo: number;
  nome: string;
}

const button = {
  title: "Consultar preço",
  color: "#1E90FF",
};

export function Form() {
  const [carBrandData, setCarBrandData] = useState([]);
  const [selectedModels, setSelectedModels] = useState<CarModel[]>([]);
  const [selectedYears, setSelectedYears] = useState([]);

  const selectedBrand = useSelector((state: RootState) => state.selectedBrand);
  const selectedModel = useSelector((state: RootState) => state.selectedModel);
  const selectedYear = useSelector((state: RootState) => state.selectedYear);

  const dispatch = useDispatch();

  const handleBrandSelection = async (brand: CarInfo | null) => {
    if (brand) {
      const brandCode = brand.codigo;
      dispatch(selectBrand(brandCode));

      try {
        const data = await fetchCarModels(brandCode);
        if (data.modelos) {
          const models: CarModel[] = data.modelos;
          console.log(models);
          dispatch(updateModels(models));
          setSelectedModels(models);
        } else {
          console.error("API response does not contain 'models' key.");
        }
      } catch (error) {
        console.error("Error when searching for models:", error);
      }
    }
  };

  const handleModelSelection = (model: CarInfo | null) => {
    if (model && selectedBrand) {
      const modelCode = model.codigo;
      dispatch(selectModel(modelCode));

      //dispatch(resetSelection());
      console.log("selectedBrand:", selectedBrand);
      console.log("selectedModel:", selectedModel);

      fetchCarYears(selectedBrand, modelCode).then((anos) => {
        setSelectedYears(anos);
      });
    }
  };

  const handleYearSelection = (year: CarInfo | null) => {
    if (year) {
      const selectedYear = year.codigo;
      dispatch(selectYear(selectedYear));
    }
  };

  const handleCarPrice = async () => {
    console.log("selectedBrand:", selectedBrand);
    console.log("selectedModel:", selectedModel);
    console.log("selectedYear:", selectedYear);

    if (selectedBrand && selectedModel && selectedYear) {
      const brandCode = selectedBrand;
      const modelCode = selectedModel;

      try {
        const carPriceData = await fetchCarPrice(
          brandCode,
          modelCode,
          selectedYear
        );
        console.log("Car price data:", carPriceData);
      } catch (error) {
        console.error("Error when searching for car price:", error);
      }
    } else {
      console.error("Make, model and year must be selected.");
    }
  };

  useEffect(() => {
    async function fetchCarBrands() {
      const response = await fetch(
        "https://parallelum.com.br/fipe/api/v1/carros/marcas"
      );
      const data = await response.json();
      setCarBrandData(data);
    }

    fetchCarBrands();
  }, []);

  return (
    <StyledSection>
      <StyledFormContainer>
        <h1>Tabela Fipe</h1>
        <p>Consulte o valor de um veículo de forma gratuita</p>

        <form>
          <SelectAutoComplete
            carInfo={carBrandData}
            onSelection={handleBrandSelection}
            titleLabel="Marca"
          />
          <SelectAutoComplete
            carInfo={selectedModels}
            onSelection={handleModelSelection}
            titleLabel="Modelo"
          />
          <SelectAutoComplete
            carInfo={selectedYears}
            onSelection={handleYearSelection}
            titleLabel="Ano"
          />

          <SearchButton
            onClick={handleCarPrice}
            title={button.title}
            color={button.color}
          />
        </form>
      </StyledFormContainer>
    </StyledSection>
  );
}
