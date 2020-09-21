import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import FilterableProdutTable from "./OrderComponent/FilterableProdutTable";

function App() {
  const PRODUCTS = [
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
      stocked: true,
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
      stocked: true,
      name: "Galaxi S20",
    },
  ];

  return <FilterableProdutTable>{PRODUCTS}</FilterableProdutTable>;
}

export default App;
