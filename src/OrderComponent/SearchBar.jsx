import React from "react";

function SearchBar(props) {
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => props.onfilterTextChange(e.target.value) }
      />
      <p>
        <input type="checkbox" checked={inStockOnly} onchange ={e => props.onInStockChange(e.targe.value) /> Only show products in
        stock
      </p>
    </form>
  );
}

export default SearchBar;
