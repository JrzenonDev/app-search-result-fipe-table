export const SELECT_BRAND = "SELECT_BRAND";
export const SELECT_MODEL = "SELECT_MODEL";
export const SELECT_YEAR = "SELECT_YEAR";
export const RESET_SELECTION = "RESET_SELECTION";
export const SAVE_CAR_PRICE_DATA = "SAVE_CAR_PRICE_DATA";

interface CarPriceData {
  TipoVeiculo: number;
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
}

export const selectBrand = (brand: number | null) => ({
  type: SELECT_BRAND,
  brand,
});

export const selectModel = (model: number | null) => ({
  type: SELECT_MODEL,
  model,
});

export const selectYear = (year: number | null) => ({
  type: SELECT_YEAR,
  year,
});

export const resetSelection = () => ({
  type: RESET_SELECTION,
});

export const saveCarPriceData = (data: CarPriceData | null) => ({
  type: SAVE_CAR_PRICE_DATA,
  data,
});
