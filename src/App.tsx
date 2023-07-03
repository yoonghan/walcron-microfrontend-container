import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import Header from "./components/Header";
import { AuthenticationContext } from "./context/authentication";
import { Suspense, useState } from "react";
import defaultTheme from "./components/style/theme";
import "./App.css";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthenticationContext.Provider value={{ isSignedIn }}>
        <Header />
        <Suspense fallback={"Loading router..."}>
          <RouterProvider router={router} />
        </Suspense>
      </AuthenticationContext.Provider>
    </ThemeProvider>
  );
}

export default App;
