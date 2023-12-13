import { useEffect, useRef } from "react";

const useInterval = (callback: any, delay: any) => {
  const savedCallback = useRef<any>();

  // remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // set up the interval
  useEffect(() => {
    function tick() {
      if (!savedCallback || !savedCallback.current) {
        return;
      }

      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
export default useInterval;