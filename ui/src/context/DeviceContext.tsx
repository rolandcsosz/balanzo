import { createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import type { ComponentChildren } from 'preact';

type DeviceContextValue = boolean;

// Create the context with a default value of false (not mobile by default)
export const DeviceContext = createContext<DeviceContextValue>(false);

export function DeviceProvider({ children }: { children: ComponentChildren }) {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DeviceContext.Provider value={isMobile}>
      {children}
    </DeviceContext.Provider>
  );
}
