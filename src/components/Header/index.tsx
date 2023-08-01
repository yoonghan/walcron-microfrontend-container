import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
} from "@mui/material";
import { AuthenticationContext } from "../../context/authentication";
import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { chartPath, profilerPath } from "../../routes/constants";
import { Menu as MenuIcon, AccountCircle } from "@mui/icons-material";

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuAnchorElRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const handleSignInClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSignInClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleClick = useCallback(
    (path: string) => () => {
      handleSignInClose();
      handleMenuClose();
      navigate(path);
    },
    [handleMenuClose, navigate]
  );

  const handleToggle = () => {
    handleSignInClose();
    setOpen((prevOpen) => !prevOpen);
  };

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
                ref={menuAnchorElRef}
                onClick={handleToggle}
              >
                <MenuIcon />
              </IconButton>
              <Popper
                open={open}
                anchorEl={menuAnchorElRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        /* istanbul ignore next -- @preserve */
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleMenuClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                        >
                          {isSignedIn && (
                            <MenuItem onClick={handleClick(`/${chartPath}`)}>
                              Chart
                            </MenuItem>
                          )}
                          <MenuItem onClick={handleClick(`/about`)}>
                            About
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Microfrontend Dashboard
              </Typography>
              {!isSignedIn && (
                <Button
                  color="inherit"
                  onClick={handleClick(`/${profilerPath}/auth/login`)}
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
                    <MenuItem onClick={handleClick(`/${profilerPath}/profile`)}>
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={handleClick(`/${profilerPath}/auth/logout`)}
                    >
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
