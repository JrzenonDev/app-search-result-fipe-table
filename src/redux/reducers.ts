import { combineReducers } from "redux";
import {
  SELECT_BRAND,
  SELECT_MODEL,
  SELECT_YEAR,
  RESET_SELECTION,
} from "./actions";

export type RootState = {
  selectedBrand: number | null;
  selectedModel: number | null;
  selectedYear: number | null;
};

const selectedBrand = (
  state: string | null = null,
  action: { type: string; brand: string | null }
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
  state: string | null = null,
  action: { type: string; model: string | null }
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
  state: string | null = null,
  action: { type: string; year: string | null }
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

const rootReducer = combineReducers({
  selectedBrand,
  selectedModel,
  selectedYear,
});

export default rootReducer;
