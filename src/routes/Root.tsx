import { Outlet } from "react-router-dom";
import { ThemeProvider, Link } from "@mui/material";
import defaultTheme from "../components/style/theme";
import { chartPath, profilerPath } from "./constants";

export default function Root() {
  return (
    <ThemeProvider theme={defaultTheme}>
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
            <li>
              <Link href={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link href={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
