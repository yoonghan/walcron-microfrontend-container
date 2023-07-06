import {
  Routes,
  Link,
  MemoryRouter,
  Route,
  useLocation,
  useNavigate,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useRef } from "react";
import * as ReactDOM from "react-dom/client";
import { AuthenticationContext } from "../../context/authentication";
import appRoute from "profiler/appRoutes";
import ErrorPage from "../../routes/ErrorPage";

type Props = {
  onSignIn: () => void;
  onSignOut: () => void;
};

const baseUrl = "/profiler";

const Profiler = ({ onSignIn, onSignOut }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<ReactDOM.Root>();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.startsWith(baseUrl)) {
      window.dispatchEvent(
        new CustomEvent("[container] navigated", {
          detail: location.pathname.replace(baseUrl, ""),
        })
      );
    }
  }, [location]);

  useEffect(() => {
    const app2NavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${baseUrl}${pathname === "/" ? "" : pathname}`;
      console.log(`${newPathname} vs ${location.pathname}`);
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[profiler] navigated", app2NavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[profiler] navigated",
        app2NavigationEventHandler
      );
    };
  }, [location, navigate]);

  useEffect(() => {
    // queueMicrotask(() => {
    if (rootRef.current) {
      return;
    }

    const router = createMemoryRouter(
      [
        {
          ...appRoute("/profiler", "profiler", "container", <ErrorPage />, {
            onSignIn,
            onSignOut,
          }),
        },
      ],
      { initialEntries: [location.pathname] }
    );

    rootRef.current = ReactDOM.createRoot(wrapperRef.current!);
    rootRef.current.render(<RouterProvider router={router} />);
    // });

    // return () => {
    //   queueMicrotask(() => {
    //     rootRef.current?.unmount();
    //     rootRef.current = undefined;
    //   });
    // };
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
