import { Box, AppBar, Toolbar, Button, Typography } from "@mui/material";
import { AuthenticationContext } from "../../context/authentication";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { profilerPath } from "../../routes/constants";

const Header = () => {
  const navigate = useNavigate();

  const authenticationOnClick = useCallback(
    (isSignedIn: boolean) => () => {
      navigate(`/${profilerPath}/auth/${isSignedIn ? "logout" : "login"}`);
    },
    [navigate]
  );

  return (
    <AuthenticationContext.Consumer>
      {({ isSignedIn }) => (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Typography>Microfrontend Dashboard</Typography>
              <Button
                color="inherit"
                onClick={authenticationOnClick(isSignedIn)}
              >
                {isSignedIn ? "Logout" : "Login"}
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </AuthenticationContext.Consumer>
  );
};

export default Header;
