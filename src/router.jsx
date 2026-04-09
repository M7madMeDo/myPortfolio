import { createBrowserRouter } from "react-router";
import Home from "./components/home/Home";
import Mainlayout from "./mainlayout/Mainlayout";
import Error from "./pages/error/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
