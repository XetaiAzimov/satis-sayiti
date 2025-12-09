import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Contact from "../Pages/Contact";
import CardDetail from "../components/CardDetail";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products  />} />
        <Route path="products/:id" element={<CardDetail />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
