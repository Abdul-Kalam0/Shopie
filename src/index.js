import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";
import About from "./components/pages/About";
import ProductDetails from "./components/pages/ProductDetails";
import Products from "./components/pages/Products";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/products", element: <Products /> },
  { path: "/about", element: <About /> },
  { path: "/products/:pId", element: <ProductDetails /> },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
