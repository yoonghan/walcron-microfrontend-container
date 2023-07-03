import { Box, AppBar, Toolbar, Button, Typography } from "@mui/material";
import { AuthenticationContext } from "../../context/authentication";

const Header = () => {
  return (
    <AuthenticationContext.Consumer>
      {({ isSignedIn }) => (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Typography>Microfrontend Dashboard</Typography>
              <Button color="inherit">{isSignedIn ? "Logout" : "Login"}</Button>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </AuthenticationContext.Consumer>
  );
};

export default Header;
