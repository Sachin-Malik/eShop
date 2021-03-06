import { actionType } from "../constants/actionTypes";

export const setProducts = (products) => {
  return {
    type: actionType.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionType.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: actionType.REMOVE_SELECTED_PRODUCT,
    payload: {},
  };
};
