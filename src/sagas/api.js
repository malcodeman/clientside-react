import { get } from "axios";

export const getBrands = () => {
  return get("https://jsonplaceholder.typicode.com/posts");
};
