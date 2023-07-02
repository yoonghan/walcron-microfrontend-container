import { useEffect, useRef } from "react";
import { mount } from "chart/App1Index";
import { chartPath } from "../../routes/constants";
import { useLocation, useNavigate } from "react-router-dom";

//Non test-able, mount will be hanging when rendered.

const app1Basename = `/${chartPath}`;

const Chart = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside app1 mfe.
  useEffect(() => {
    const app1NavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${app1Basename}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[app1] navigated", app1NavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[app1] navigated",
        app1NavigationEventHandler
      );
    };
  }, [location, navigate]);

  // Listen for shell location changes and dispatch a notification.
  useEffect(() => {
    if (location.pathname.startsWith(app1Basename)) {
      window.dispatchEvent(
        new CustomEvent("[shell] navigated", {
          detail: location.pathname.replace(app1Basename, ""),
        })
      );
    }
  }, [location]);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {
    //empty
  });

  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    try {
      unmountRef.current = mount({
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        mountPoint: wrapperRef.current!,
        initialPathname: location.pathname.replace(app1Basename, ""),
      });
      isFirstRunRef.current = false;
    } catch (e) {
      console.error(e);
    }
  }, [location]);

  useEffect(() => {
    if (isFirstRunRef.current) {
      return unmountRef.current;
    }
  });

  return <div ref={wrapperRef} data-testid="chart-mfe" />;
};

export default Chart;
