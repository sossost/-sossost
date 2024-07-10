import { useState, useEffect } from 'react';
import { overlayCore } from './overlayCore';

export const useOverlay = () => {
  const [currentOverlay, setCurrentOverlay] = useState(
    overlayCore.currentOverlay,
  );

  useEffect(() => {
    const unsubscribe = overlayCore.subscribe(() => {
      setCurrentOverlay(overlayCore.currentOverlay);
    });

    return () => unsubscribe();
  }, []);

  return currentOverlay;
};
