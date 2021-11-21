import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  console.log(product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const { productId } = useParams();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("ERROR", err);
      });
    dispatch(selectedProduct(response.data));
  };

  const toUpper = (title) => {
    return (title = title.toUpperCase());
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct);
    };
  }, [productId]);

  return (
    <div className='ui grid container mt-5'>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className='row'>
          <div className='col-5'>
            <div class='view overlay z-depth-2 rounded'>
              <img
                style={{ height: "400px", width: "400px" }}
                class='img-fluid w-100'
                src={image}
                alt='Sample'
              />
              <a href='#!'>
                <div class='mask rgba-white-slight'></div>
              </a>
            </div>

            <div class='text-center pt-4'>
              <h5>{title}</h5>
              <p class='text-muted text-uppercase mb-2'>$ {price}</p>
            </div>
          </div>
          <div style={{ height: "auto" }} className=' card col-7 p-5'>
            <h2 className='mt-3'>{toUpper(category)}</h2>
            <p>{description}</p>
            <div className='col-6'>
              <button
                type='button'
                className='btn btn-primary btn-sm mr-1 mb-2 mt-3'
              >
                Add to cart
              </button>
              <button
                type='button'
                className='btn btn-danger btn-bg px-3 mb-2 mt-3'
              >
                <i class='far fa-heart'></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
