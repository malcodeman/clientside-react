export const REQUEST_BRANDS = "REQUEST_BRANDS";
export const RECIVE_BRANDS = "RECIVE_BRANDS";

export const requestBrands = () => {
  return {
    type: REQUEST_BRANDS
  };
};

export const reciveBrands = data => {
  return {
    type: RECIVE_BRANDS,
    payload: data
  };
};
