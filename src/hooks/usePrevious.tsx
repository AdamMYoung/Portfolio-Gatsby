import { useRef, useEffect } from 'react';

/**
 * Custom hook to track previous values, as a replacement to componentDidUpdate().
 * @param value Value to track.
 */
export default function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
