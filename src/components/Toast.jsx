import React, { useEffect, useRef } from 'react';

export default function Toast({ message, onDone, duration = 2200 }) {
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    if (!message) return undefined;
    const t = setTimeout(() => doneRef.current(), duration);
    return () => clearTimeout(t);
  }, [message, duration]);

  if (!message) return null;

  return (
    <div role="status" aria-live="polite" className="toast">
      {message}
    </div>
  );
}
