import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProdutTable(props) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={props.products} />
    </div>
  );
}

export default FilterableProdutTable;
