import { createContext } from "react";

type Props = {
  isSignedIn: boolean;
  setIsSignedIn: (signIn: boolean) => void;
};

export const defaultProps: Props = {
  isSignedIn: false,
  setIsSignedIn: () => {
    //empty
  },
};

export const AuthenticationContext = createContext(defaultProps);
