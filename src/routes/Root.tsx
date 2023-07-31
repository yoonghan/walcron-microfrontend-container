import { Outlet } from "react-router-dom";
import { Link } from "@mui/material";
import { chartPath, profilerPath } from "./constants";
import Header from "../components/Header";
export default function Root() {
  return (
    <>
      <Header />
      <div id="outlet" data-testid="outlet">
        <Outlet />
      </div>
    </>
  );
}
