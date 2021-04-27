/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

const ProductCart = (props) => {
  const temp = null;

  return (
    <div className="productCart">
      <form id="productCart">
        <button id="addToBag" type="submit">
          <i id="addToCartText">ADD TO BAG</i>
        </button>
        <button id="favorite" type="submit">
          <i className="far fa-star" id="favoriteStar" />
        </button>
      </form>
    </div>
  );
};

export default ProductCart;
