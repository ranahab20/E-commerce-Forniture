import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import MainLayout from "./Layout/mainLayout/mainLayout";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />} path="/">

        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="productdetails" element={<ProductDetails/>} />
      </Route>
    </Routes>
  );
}

export default App;
