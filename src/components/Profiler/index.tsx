import {
  BrowserRouter,
  Link,
  Router,
  RouterProvider,
  createMemoryRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import appRoute from "profiler/appRoutes";
import ErrorPage from "../../routes/ErrorPage";
import { useCallback, useEffect, useRef } from "react";
import * as ReactDOM from "react-dom/client";
import { AuthenticationContext } from "../../context/authentication";

type Props = {
  onSignIn: () => void;
  onSignOut: () => void;
};

const Profiler = ({ onSignIn, onSignOut }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<ReactDOM.Root>();
  const location = useLocation();

  useEffect(() => {
    const router = createMemoryRouter(
      [
        {
          ...appRoute("/profiler", <ErrorPage />, {
            onSignIn,
            onSignOut,
          }),
        },
      ],
      { initialEntries: [location.pathname] }
    );

    queueMicrotask(() => {
      rootRef.current = ReactDOM.createRoot(wrapperRef.current!);
      rootRef.current.render(<RouterProvider router={router} />);
    });

    return () => {
      queueMicrotask(() => {
        rootRef.current?.unmount();
        rootRef.current = undefined;
      });
    };
  }, [location.pathname, onSignIn, onSignOut]);

  return <div ref={wrapperRef} />;
};

const ProfilerWithAuthentication = () => {
  return (
    <AuthenticationContext.Consumer>
      {({ setIsSignedIn }) => (
        <>
          <Profiler
            onSignIn={() => setIsSignedIn(true)}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Link to="/profiler/auth/login">Login</Link>
        </>
      )}
    </AuthenticationContext.Consumer>
  );
};

export default ProfilerWithAuthentication;
