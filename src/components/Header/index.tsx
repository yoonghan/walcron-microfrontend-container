import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { AuthenticationContext } from "../../context/authentication";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { profilerPath } from "../../routes/constants";
import { Menu as MenuIcon, AccountCircle } from "@mui/icons-material";

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileClick = () => {
    handleSignInClose();
    navigate(`/${profilerPath}/profile`);
  };

  const handleSignInClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSignInClose = () => {
    setAnchorEl(null);
  };

  const authenticationOnClick = useCallback(
    (isSignedIn: boolean) => () => {
      navigate(`/${profilerPath}/auth/${isSignedIn ? "logout" : "login"}`);
      handleSignInClose();
    },
    [navigate]
  );

  return (
    <AuthenticationContext.Consumer>
      {({ isSignedIn }) => (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="main-menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Microfrontend Dashboard
              </Typography>
              {!isSignedIn && (
                <Button
                  color="inherit"
                  onClick={authenticationOnClick(isSignedIn)}
                >
                  Login
                </Button>
              )}
              {isSignedIn && (
                <>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2 }}
                    onClick={handleSignInClick}
                    aria-label="profile-menu"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleSignInClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                    <MenuItem onClick={authenticationOnClick(isSignedIn)}>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </AuthenticationContext.Consumer>
  );
};

export default Header;
