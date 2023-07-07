import { RouterProvider, createMemoryRouter } from "react-router-dom";
import appRoute from "profiler/appRoutes";
import ErrorPage from "../../routes/ErrorPage";
import { useEffect, useRef } from "react";
import * as ReactDOM from "react-dom/client";
import { AuthenticationContext } from "../../context/authentication";

type Props = {
  onSignIn: () => void;
  onSignOut: () => void;
};

const Profiler = ({ onSignIn, onSignOut }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<ReactDOM.Root>();

  useEffect(() => {
    const route = createMemoryRouter(
      [{ ...appRoute("/", "appname", "container", <ErrorPage />, { onSignIn, onSignOut }) }],
      { initialEntries: ["/auth/login"] }
    );
    if (rootRef.current === undefined) {
      rootRef.current = ReactDOM.createRoot(wrapperRef.current!);
    }
    rootRef.current.render(<RouterProvider router={route} />);
  }, [onSignIn, onSignOut]);

  return <div ref={wrapperRef} />;
};

const ProfilerWithAuthentication = () => {
  return (
    <AuthenticationContext.Consumer>
      {({ setIsSignedIn }) => (
        <Profiler
          onSignIn={() => setIsSignedIn(true)}
          onSignOut={() => setIsSignedIn(false)}
        />
      )}
    </AuthenticationContext.Consumer>
  );
};

export default ProfilerWithAuthentication;
