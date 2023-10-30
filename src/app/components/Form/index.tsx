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
import { useRouter } from "next/navigation";
import { saveCarPriceData } from "@/redux/actions";
import { Snackbar } from "@mui/material";

interface CarInfo {
  codigo: number;
  nome: string;
}

interface CarModel {
  codigo: number;
  nome: string;
}

export function Form() {
  const [carBrandData, setCarBrandData] = useState([]);
  const [selectedModels, setSelectedModels] = useState<CarModel[]>([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [isVisibleYear, setIsVisibleYear] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const selectedBrand = useSelector((state: RootState) => state.selectedBrand);
  const selectedModel = useSelector((state: RootState) => state.selectedModel);
  const selectedYear = useSelector((state: RootState) => state.selectedYear);

  const dispatch = useDispatch();
  const router = useRouter();

  const openSnackbar = () => {
    setSnackbarOpen(true);
  };

  const resetFormState = () => {
    dispatch(selectBrand(null));
    dispatch(selectModel(null));
    dispatch(selectYear(null));
    setSelectedModels([]);
    setSelectedYears([]);
    setIsVisibleYear(false);
  };

  const handleSnackbarClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleBrandSelection = async (brand: CarInfo | null) => {
    if (brand) {
      const brandCode = brand.codigo;
      dispatch(selectBrand(brandCode));

      try {
        const data = await fetchCarModels(brandCode);
        if (data.modelos) {
          const models: CarModel[] = data.modelos;
          dispatch(updateModels(models));
          setSelectedModels(models);

          setIsVisibleYear(false);
          setIsButtonEnabled(false);
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

      dispatch(selectYear(null));

      setSelectedYears([]);
      setIsVisibleYear(true);

      if (selectedBrand && selectedModel && selectedYear !== null) {
        setIsButtonEnabled(false);
        openSnackbar();
      }

      fetchCarYears(selectedBrand, modelCode).then((anos) => {
        setSelectedYears(anos);
      });
    }
  };

  const handleYearSelection = (year: CarInfo | null) => {
    if (year) {
      const selectedYearValue = year.codigo;
      dispatch(selectYear(selectedYearValue));
      setIsButtonEnabled(true);
    }
  };

  const handleCarPrice = async () => {
    if (selectedBrand && selectedModel && selectedYear) {
      const brandCode = selectedBrand;
      const modelCode = selectedModel;

      try {
        const carPriceData = await fetchCarPrice(
          brandCode,
          modelCode,
          selectedYear
        );

        dispatch(saveCarPriceData(carPriceData));

        router.push("/car-price");
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

  useEffect(() => {
    if (selectedBrand && selectedModel && selectedYear !== null) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [selectedBrand, selectedModel, selectedYear]);

  useEffect(() => {
    if (window.location.pathname === "/") {
      resetFormState();
    }
    const handlePopState = () => {
      if (window.location.pathname === "/") {
        resetFormState();
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
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
            isVisible={true}
          />
          <SelectAutoComplete
            carInfo={selectedModels}
            onSelection={handleModelSelection}
            titleLabel="Modelo"
            isVisible={true}
          />
          <SelectAutoComplete
            carInfo={selectedYears}
            onSelection={handleYearSelection}
            titleLabel="Ano"
            isVisible={isVisibleYear}
          />

          <SearchButton
            onClick={handleCarPrice}
            color={isButtonEnabled ? "#5d00bf" : "#e0e0e0"}
            enable={isButtonEnabled ? false : true}
          />
        </form>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          message="Modelo alterado. O ano precisa ser redefinido."
        />
      </StyledFormContainer>
    </StyledSection>
  );
}
