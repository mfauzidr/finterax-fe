import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import CommonLayout from "../Layouts/CommonLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
