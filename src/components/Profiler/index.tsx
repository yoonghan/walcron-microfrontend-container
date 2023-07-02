import { RouterProvider, createMemoryRouter } from "react-router-dom";
import appRoute from "profiler/appRoutes";
import ErrorPage from "../../routes/ErrorPage";
import { useEffect, useRef } from "react";
import * as ReactDOM from "react-dom/client";

const Profiler = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const route = createMemoryRouter([{ ...appRoute("/", <ErrorPage />) }]);
    ReactDOM.createRoot(wrapperRef.current!).render(
      <RouterProvider router={route} />
    );
  }, []);

  return <div ref={wrapperRef} />;
};

export default Profiler;
