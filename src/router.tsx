import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import appRoutes from "remoteApp/appRoutes";

export const definedRoute = [
  {
    path: "/profiler",
    element: <Root />,
    children: [...appRoutes],
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
];

/* istanbul ignore next */
export default createBrowserRouter(definedRoute);
