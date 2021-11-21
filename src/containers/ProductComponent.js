import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  //
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className='col-3 mt-3' key={id}>
        <Link to={`/product/${id}`}>
          <div className='ui link cards'>
            <div className='card'>
              <div
                className='image'
                style={{
                  width: "200px",
                  height: "200px",
                  overflow: "hidden",
                  alignSelf: "center",
                  padding: "0px 0px",
                }}
              >
                <img src={image} alt={title} />
              </div>
              <div className='content'>
                <div className='header'>{title}</div>
                <div className='meta price'>$ {price}</div>
                <div className='meta'>{category}</div>
                <div></div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
