import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<ProductListing />} />
          <Route path='/product/:productId' exact element={<ProductDetail />} />
          <Route>404 Path not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
