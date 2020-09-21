import React from "react";

function ProductCategoryRow(props) {
  const product = props.category;

  return (
    <tr>
      <th colSpan="2">{product.category}</th>
    </tr>
  );
}

export default ProductCategoryRow;
