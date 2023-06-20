import { RouteObject, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import appRoutes from "remoteApp/appRoutes";

export const definedRoute: RouteObject[] = [
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
const browserRouter = createBrowserRouter(definedRoute);

/* istanbul ignore next */
export default browserRouter;
