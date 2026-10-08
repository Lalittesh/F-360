import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

// Restaurant Dashboard Pages
import RestaurantLayout from "./pages/restaurant/RestaurantLayout";
import RestaurantDashboard from "./pages/restaurant/RestaurantDashboard";
import DonateFood from "./pages/restaurant/DonateFood";
import MyDonations from "./pages/restaurant/MyDonations";
import RestaurantProfile from "./pages/restaurant/RestaurantProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Restaurant Routes */}
        <Route path="/restaurant" element={<RestaurantLayout />}>
          <Route index element={<RestaurantDashboard />} />
          <Route path="donate" element={<DonateFood />} />
          <Route path="donations" element={<MyDonations />} />
          <Route path="profile" element={<RestaurantProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
