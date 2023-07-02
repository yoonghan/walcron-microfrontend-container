/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { chartPath, profilerPath } from "./constants";
import Root from "./Root";

export const ProfilerLazy = lazy(() => import("../components/Profiler"));
export const ChartLazy = lazy(() => import("../components/Chart"));

export const definedRoute: RouteObject[] = [
  {
    path: `/${profilerPath}/*`,
    element: <ProfilerLazy />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/${chartPath}/*`,
    element: (
      <Suspense fallback={"Can't be loaded"}>
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
