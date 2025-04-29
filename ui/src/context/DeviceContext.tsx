import { createContext } from "preact";
import { useState, useEffect } from "preact/hooks";
import type { ComponentChildren } from "preact";

// Define the type for the context value
type DeviceContextValue = boolean;

// Create the context with a default value of false (not mobile by default)
export const DeviceContext = createContext<DeviceContextValue>(false);

export function DeviceProvider({ children }: { children: ComponentChildren }) {
    // State to track if the device is mobile
    const [isMobile, setIsMobile] = useState<boolean>(window.outerWidth <= 600);

    useEffect(() => {
        // Function to update the state based on window size
        const handleResize = () => setIsMobile(window.outerWidth <= 600);

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        // Provide the isMobile state to the context
        <DeviceContext.Provider value={isMobile}>{children}</DeviceContext.Provider>
    );
}
