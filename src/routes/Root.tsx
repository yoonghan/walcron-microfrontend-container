import { Outlet } from "react-router-dom";
import { Link } from "@mui/material";
import { chartPath, profilerPath } from "./constants";
import Header from "../components/Header";

export default function Root() {
  return (
    <>
      <Header />
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link href={`${profilerPath}`} color="inherit">
                Profiler
              </Link>
            </li>
            <li>
              <Link href={`${chartPath}`} color="inherit">
                Chart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
