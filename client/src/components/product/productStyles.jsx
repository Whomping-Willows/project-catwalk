/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const ProductStyles = (props) => {
  const temp = null;

  const styleData = props.styles.results;

  const fontSizing = {
    fontSize: 16,
  };

  const styleSelectors = styleData.map((data) => (
    <img
      className="styleOption"
      key={data.style_id}
      alt={data.name}
      src={data.photos[0].thumbnail_url}
    />
  ));

  return (
    <div className="productStyles">
      <div id="productPrice">
        <p>Price</p>
      </div>
      <p style={fontSizing}>
        <b>
          Style
          {' > '}
        </b>
        {/* {SELECTED STYLE} */}
      </p>
      <div>
        <div className="styleSelector">
          {styleSelectors}
        </div>
      </div>
      <form className="sizingForm">
        <input id="sizeSelector" type="text" value="SELECT SIZE" />
        <input id="quantitySelector" type="integer" value="1" />
      </form>
    </div>
  );
};

export default ProductStyles;
