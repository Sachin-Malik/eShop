import { useEffect } from "react";
import axios from "axios";
import React from "react";
import ProductComponent from "./ProductComponent";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  // const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("ERROR", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='ui grid container mt-5'>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
