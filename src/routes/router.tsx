/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import profileRouter from "profiler/appRoutes";
import { chartPath, profilerPath } from "./constants";

export const ChartLazy = lazy(() => import("../components/Chart"));

export const definedRoute: RouteObject[] = [
  { ...profileRouter(`/${profilerPath}`, <ErrorPage />) },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/${chartPath}/*`,
    element: (
      <Suspense fallback="Loading Chart...">
        <ChartLazy />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
];

/* istanbul ignore next */
const browserRouter = createBrowserRouter(definedRoute);

/* istanbul ignore next */
export default browserRouter;
