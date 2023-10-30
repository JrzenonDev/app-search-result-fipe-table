import axios from "axios";

// Função para buscar modelos com base na marca selecionada
export async function fetchCarModels(brandCode: number) {
  const response = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos`
  );
  if (!response.ok) {
    throw new Error(`Erro ao buscar modelos fetch: ${response.statusText}`);
  }
  return response.json();
}

// Função para buscar anos com base na marca e modelo selecionados
export async function fetchCarYears(brandCode: number, modelCode: number) {
  try {
    const response = await axios.get(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos/${modelCode}/anos`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar anos:", error);
    return [];
  }
}

export async function fetchCarPrice(
  brandCode: number,
  modelCode: number,
  year: number
) {
  try {
    const response = await axios.get(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos/${modelCode}/anos/${year}-3`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar preço:", error);
    return [];
  }
}
