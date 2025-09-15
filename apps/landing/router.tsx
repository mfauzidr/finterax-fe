import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/Home";
import { NotFound } from "./src/pages/NotFound";
import CommonLayout from "./src/layouts/CommonLayout";

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
