import React, { lazy, Suspense } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import appRoutes from "profiler/appRoutes";

const App1Lazy = lazy(() => import("./components/App1"));

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

    children: [
      {
        path: "contacts/:contactId",
        element: (
          <Suspense fallback="Loading App1...">
            <App1Lazy />
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
