import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import { HostLayout, PageLayout } from "./components";
import { AuthContextProvider } from "./context/AuthContext";

// should be in jsx

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthContextProvider>
          <PageLayout />
        </AuthContextProvider>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "vehicles", element: <Vehicles /> },
        { path: "vehicles/:id", element: <VehiclesDetail /> },
        { path: "auth", element: <Auth /> },
        {
          path: "host",
          element: <HostLayout />,
          children: [
            { index: true, element: <Dashboard /> },
            { path: "income", element: <Income /> },
            { path: "reviews", element: <Reviews /> },
            { path: "vehicles", element: <HostVehicles /> },
            {
              path: "vehicles/:id",
              element: <HostVanDetail />,
              children: [
                { index: true, element: <HostVanInfo /> },
                { path: "pricing", element: <HostVanPricing /> },
                { path: "photos", element: <HostVanPhotos /> },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
