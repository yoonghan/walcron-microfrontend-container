import mount from "profiler/mount";
import { useRef, useEffect } from "react";

const App1 = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isFirstRunRef = useRef(true);

  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    console.log("mount");
    mount(document.getElementById("app1-mfe") as HTMLElement, false);
    isFirstRunRef.current = false;
  }, []);

  return (
    <div ref={wrapperRef} id="app1-mfe">
      I am a console
    </div>
  );
};

export default App1;
