import { combineReducers } from "redux";
import {
  SELECT_BRAND,
  SELECT_MODEL,
  SELECT_YEAR,
  RESET_SELECTION,
  SAVE_CAR_PRICE_DATA,
} from "./actions";

export type RootState = {
  selectedBrand: number | null;
  selectedModel: number | null;
  selectedYear: number | null;
  carPriceData: {
    TipoVeiculo: number;
    Valor: string;
    Marca: string;
    Modelo: string;
    AnoModelo: number;
    Combustivel: string;
    CodigoFipe: string;
    MesReferencia: string;
    SiglaCombustivel: string;
  } | null;
};

const selectedBrand = (
  state: number | null = null,
  action: { type: string; brand: number | null }
) => {
  switch (action.type) {
    case SELECT_BRAND:
      return action.brand;
    case RESET_SELECTION:
      return null;
    default:
      return state;
  }
};

const selectedModel = (
  state: number | null = null,
  action: { type: string; model: number | null }
) => {
  switch (action.type) {
    case SELECT_MODEL:
      return action.model;
    case RESET_SELECTION:
      return null;
    default:
      return state;
  }
};

const selectedYear = (
  state: number | null = null,
  action: { type: string; year: number | null }
) => {
  switch (action.type) {
    case SELECT_YEAR:
      return action.year;
    case RESET_SELECTION:
      return null;
    default:
      return state;
  }
};

const carPriceData = (
  state: RootState["carPriceData"] | null = null,
  action: { type: string; data: RootState["carPriceData"] | null }
) => {
  switch (action.type) {
    case SAVE_CAR_PRICE_DATA:
      return action.data;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  selectedBrand,
  selectedModel,
  selectedYear,
  carPriceData,
});

export default rootReducer;
