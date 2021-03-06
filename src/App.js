import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import FilterableProductTable from "./OrderComponent/FilterableProductTable";

function App() {
  const products = [
    {
      category: "Sporting Goods",
      price: "49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "29.99",
      stocked: false,
      name: "Basketball",
    },
    { category: "Electronics", price: "899.99", stocked: true, name: "iPad" },
    {
      category: "Electronics",
      price: "399.99",
      stocked: true,
      name: "iPhone 11",
    },
    {
      category: "Electronics",
      price: "199.99",
      stocked: false,
      name: "Galaxi S20",
    },
  ];

  return <FilterableProductTable products={products}></FilterableProductTable>;
}

export default App;
