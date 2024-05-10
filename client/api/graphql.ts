import { gql, request } from "graphql-request";
import { ProductType } from "../types";

const GRAPHQL_ENDPOINT = "http://localhost:3001/graphql";

type Data = {
  allProducts: [ProductType];
};

export const fetchProducts = async () => {
  const query = gql`
    query {
      allProducts {
        id
        name
        power
        description
        price
        quantity
        brand
        weight
        height
        width
        length
        model_code
        colour
        img_url
      }
    }
  `;

  try {
    const data: Data = await request(GRAPHQL_ENDPOINT, query);
    return data.allProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
