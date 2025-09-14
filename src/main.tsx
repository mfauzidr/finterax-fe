import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "../tailwind.css";
import { RouterProvider } from "react-router-dom";
import router from "./styles/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
