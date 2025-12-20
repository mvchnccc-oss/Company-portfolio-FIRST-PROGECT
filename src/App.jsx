import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/mainLayout";
import Home from "./Pages/Home";
import Notfound from "./Pages/Notfound";
import Solution from "./Pages/Solution";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "Solution", element: <Solution /> },
      { path: "Product", element: <Product /> },
      { path: "Pricing", element: <Pricing /> },
      { path: "Contact", element: <Contact /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}
