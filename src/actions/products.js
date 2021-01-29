import { GET_PRODUCTS } from "../actions/types";
import products from "../data/products";

export const getProducts = () => (dispatch) => {
  //make api call and get products

  try {
    dispatch({
      type: GET_PRODUCTS,
      payload: products,
    });
  } catch (error) {
    console.log(error);
  }
};
