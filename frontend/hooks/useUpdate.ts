import { useEffect, useRef } from 'react';

export default function useUpdate(fn: () => void) {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      fn();
    } else {
      mounted.current = true;
    }
  });
}

