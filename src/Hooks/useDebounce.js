import { useEffect, useRef } from 'react';

export function useDebounce(callback, timeout, deps= []) {
  const data = useRef({ firstTime: true });
  useEffect(() => {
    const { firstTime, clearFunc } = data.current;

    const handler = setTimeout(() => {
      if (clearFunc && typeof clearFunc === 'function') {
        clearFunc();
      }
      data.current.clearFunc = callback();
    }, timeout);

    return () => {
      clearTimeout(handler);
    };
  }, [timeout, ...deps]);
}

export default useDebounce;