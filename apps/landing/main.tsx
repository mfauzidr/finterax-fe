import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "../../shared/styles/main.css";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
