import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <h1>Walcron Microfrontend camp</h1>
      <React.Suspense fallback={"Loading router..."}>
        <RouterProvider router={router} />
      </React.Suspense>
    </div>
  </React.StrictMode>
);
