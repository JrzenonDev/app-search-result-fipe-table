import axios from "axios";

// Function to search for models based on the selected brand
export async function fetchCarModels(brandCode: number) {
  const response = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos`
  );
  if (!response.ok) {
    throw new Error(`Error when fetching fetch models: ${response.statusText}`);
  }
  return response.json();
}

// Function to search for years based on the selected make and model
export async function fetchCarYears(brandCode: number, modelCode: number) {
  try {
    const response = await axios.get(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos/${modelCode}/anos`
    );
    return response.data;
  } catch (error) {
    console.error("Error when searching for years:", error);
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
    console.error("Error when searching for price:", error);
    return [];
  }
}
