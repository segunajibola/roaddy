import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles/Vehicles";
import VehiclesDetail from "./pages/Vehicles/VehiclesDetail";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVehicles from "./pages/Host/HostVehicles";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
// import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
// import AuthRequired from "./components/AuthRequired";
import { auth } from "./api";
import {
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// import "./server";

function App() {
  const [user, setUser] = useState();

  onAuthStateChanged(
    auth,
    (currentUser) => {
      setUser(currentUser);
    }
    // Unsubscribe from the listener when the component unmounts
    // return () => unsubscribe();
  );

  // useEffect(() => {
  //   // Configure persistence (e.g., LOCAL or SESSION)
  //   // setPersistence(auth, browserLocalPersistence)
  //     .then(() => {
  //       // Listen for authentication state changes
  //       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //         setUser(currentUser);
  //       });
  //       // Unsubscribe from the listener when the component unmounts
  //       return () => unsubscribe();
  //     })
  //     .catch((error) => {
  //       // Handle any errors that occur during persistence configuration
  //       console.error("Error setting persistence:", error);
  //     });
  // }, []);

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
            <Route
              path="host"
              element={
                <ProtectedRoute>
                  <HostLayout />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="income"
                element={
                  <ProtectedRoute>
                    <Income />
                  </ProtectedRoute>
                }
              />
              <Route
                path="reviews"
                element={
                  <ProtectedRoute>
                    <Reviews />
                  </ProtectedRoute>
                }
              />
              <Route
                path="vehicles"
                element={
                  <ProtectedRoute>
                    <HostVehicles />
                  </ProtectedRoute>
                }
              />
              <Route
                path="vehicles/:id"
                element={
                  <ProtectedRoute>
                    <HostVanDetail />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={
                    <ProtectedRoute>
                      <HostVanInfo />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="pricing"
                  element={
                    <ProtectedRoute>
                      <HostVanPricing />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="photos"
                  element={
                    <ProtectedRoute>
                      <HostVanPhotos />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Route>

            {/* <Route element={<AuthRequired user={user} />}> */}

            {/*  */}
            {/* </Route> */}
            {/* </Route> */}

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
