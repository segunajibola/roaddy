import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vehicles from "./pages/Vehicles/Vehicles";
import VehiclesDetail from "./pages/Vehicles/VehiclesDetail";
import { Home, About, Auth, NotFound } from "./pages";
import {
  Dashboard,
  Income,
  Reviews,
  HostVehicles,
  HostVanDetail,
  HostVanInfo,
  HostVanPricing,
  HostVanPhotos,
} from "./pages/Host";
import { HostLayout, Layout, ProtectedRoute } from "./components";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="vehicles/:id" element={<VehiclesDetail />} />
            <Route path="auth" element={<Auth />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vehicles" element={<HostVehicles />} />
              <Route path="vehicles/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
