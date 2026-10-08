import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import RestaurantLayout from "./pages/restaurant/RestaurantLayout";
import RestaurantDashboard from "./pages/restaurant/RestaurantDashboard";
import DonateFood from "./pages/restaurant/DonateFood";
import MyDonations from "./pages/restaurant/MyDonations";
import RestaurantProfile from "./pages/restaurant/RestaurantProfile";
import IncomingRequests from "./pages/restaurant/IncomingRequests";

// NGO Dashboard Pages
import NgoLayout from "./pages/ngo/NgoLayout";
import NgoDashboard from "./pages/ngo/NgoDashboard";
import AvailableFood from "./pages/ngo/AvailableFood";
import MyRequests from "./pages/ngo/MyRequests";
import NgoProfile from "./pages/ngo/NgoProfile";

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
          <Route path="incoming-requests" element={<IncomingRequests />} />
          <Route path="donations" element={<MyDonations />} />
          <Route path="profile" element={<RestaurantProfile />} />
        </Route>

        {/* NGO Routes */}
        <Route path="/ngo" element={<NgoLayout />}>
          <Route index element={<NgoDashboard />} />
          <Route path="available-food" element={<AvailableFood />} />
          <Route path="requests" element={<MyRequests />} />
          <Route path="profile" element={<NgoProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
