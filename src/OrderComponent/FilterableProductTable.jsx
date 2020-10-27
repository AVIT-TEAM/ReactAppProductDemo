import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import "./FilterableProductTable.css";

function FilterableProductTable(props) {
  const [filterText, setFilterText] = React.useState("");
  const [inStockOnly, setInStockOnly] = React.useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={(text) => setFilterText(text)}
        onInStockChange={(stock) => setInStockOnly(stock)}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={props.products}
      />
    </div>
  );
}

export default FilterableProductTable;
