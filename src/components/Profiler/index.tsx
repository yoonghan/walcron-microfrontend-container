import {
  useNavigate,
  useLocation,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";
import { useCallback, useEffect, useRef } from "react";
import * as ReactDOM from "react-dom/client";
import { AuthenticationContext } from "../../context/authentication";
import appRoute from "profiler/appRoutes";
import ErrorPage from "../../routes/ErrorPage";

type Props = {
  onSignIn: () => void;
  onSignOut: () => void;
};

const container = "container";
const appName = "profiler";
const baseUrl = `/${appName}`;

const Profiler = ({ onSignIn, onSignOut }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<ReactDOM.Root>();
  const location = useLocation();
  const navigate = useNavigate();

  const onProfileSignIn = useCallback(() => {
    onSignIn();
    navigate("/profiler/profile");
  }, [onSignIn, navigate]);

  useEffect(() => {
    if (location.pathname.startsWith(baseUrl)) {
      window.dispatchEvent(
        new CustomEvent(`[${container}] navigated`, {
          detail: location.pathname.replace(baseUrl, ""),
        })
      );
    }
  }, [location]);

  useEffect(() => {
    const app2NavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${baseUrl}${pathname === "/" ? "" : pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener(
      `[${appName}] navigated`,
      app2NavigationEventHandler
    );

    return () => {
      window.removeEventListener(
        `[${appName}] navigated`,
        app2NavigationEventHandler
      );
    };
  }, [location, navigate]);

  useEffect(() => {
    // queueMicrotask(() => {
    if (rootRef.current) {
      return;
    }
    const initalEntry = location.pathname.substring(baseUrl.length) + "/";
    const router = createMemoryRouter(
      [
        {
          ...appRoute({
            appName: "profiler",
            containerName: "container",
            errorElement: <ErrorPage />,
            props: {
              onSignIn: onProfileSignIn,
              onSignOut,
            },
          }),
        },
      ],
      { initialEntries: [initalEntry] }
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
  }, [location.pathname, onProfileSignIn, onSignOut]);

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
