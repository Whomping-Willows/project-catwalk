import React from 'react';

const ProductStyles = (props) => {
  const temp = null;

  const syleData = null;
  const fontSizing = {
    fontSize: 16,
  };

  return (
    <div className="productStyles">
      <div>
        <p>Price</p>
      </div>
      <p style={fontSizing}>
        <b>
          Style
          {' > '}
        </b>
        SELECTED STYLE
      </p>
      <div>
        <form>
          <input className="styleOption" id="sytle0" />
          <input className="styleOption" id="sytle1" />
          <input className="styleOption" id="sytle2" />
          <input className="styleOption" id="sytle3" />
        </form>
      </div>
      <form className="sizingForm">
        <input id="sizeSelector" type="text" value="SELECT SIZE" />
        <input id="quantitySelector" type="integer" value="1" />
      </form>
    </div>
  );
};

export default ProductStyles;
