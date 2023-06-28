import { RouteObject, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import profileRouter from "profiler/appRoutes";

export const definedRoute: RouteObject[] = [
  { ...profileRouter("/profiler", <ErrorPage />) },
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
