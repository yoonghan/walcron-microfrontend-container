import { createContext } from "react";

export const props = {
  isSignedIn: false,
};

export const AuthenticationContext = createContext(props);
