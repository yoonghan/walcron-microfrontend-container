import { Outlet, useLocation } from "react-router-dom";
import { Link } from "@mui/material";
import { chartPath, profilerPath } from "./constants";
import Header from "../components/Header";
import NavigationBreadcrumb from "../components/NavigationBreadcrumb";
export default function Root() {
  const location = useLocation();

  return (
    <>
      <Header />
      <NavigationBreadcrumb pathname={location.pathname} />
      <div id="outlet" data-testid="outlet">
        <Outlet />
      </div>
    </>
  );
}
