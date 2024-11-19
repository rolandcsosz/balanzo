import { createContext} from 'preact';
import { useContext, useState, useEffect } from 'preact/hooks';

type DeviceContextValue = boolean;

// Create context with an initial value of false (not mobile by default)
const DeviceContext = createContext<DeviceContextValue>(false);

export function DeviceProvider({ children }: { children: preact.ComponentChildren }) {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 600);

  // Resize handler for updating isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);

    // Add event listener on mount and clean up on unmount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DeviceContext.Provider value={isMobile}>
      {children}
    </DeviceContext.Provider>
  );
}

// Custom hook to consume the context
export function useDevice() {
  return useContext(DeviceContext);
}
