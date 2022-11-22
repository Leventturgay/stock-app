import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import Firms from "../pages/Firms";
import Products from "../pages/Products";
import Purchases from "../pages/Purchases";
import Sales from "../pages/Sales";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="brands" element={<Brands />} />
            <Route path="firms" element={<Firms />} />
            <Route path="products" element={<Products />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="sales" element={<Sales />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
