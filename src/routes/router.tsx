/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { chartPath, profilerPath } from "./constants";
import Root from "./Root";
import MainPage from "./MainPage";
import About from "./About";

export const ProfilerLazy = lazy(() => import("../components/Profiler"));
export const ChartLazy = lazy(() => import("../components/Chart"));

export const definedRoute: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: `/${profilerPath}/*`,
        element: <ProfilerLazy />,
      },
      {
        path: `/${chartPath}/*`,
        element: (
          <Suspense fallback={"Loading Chart"}>
            <ChartLazy />
          </Suspense>
        ),
      },
    ],
  },
];

/* istanbul ignore next */
const browserRouter = createBrowserRouter(definedRoute);

/* istanbul ignore next */
export default browserRouter;
