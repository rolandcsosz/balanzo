import { createContext } from "preact";
import { useState, useEffect } from "preact/hooks";
import type { ComponentChildren } from "preact";

type DeviceContextValue = boolean;

export const DeviceContext = createContext<DeviceContextValue>(false);

export const DeviceProvider = ({ children }: { children: ComponentChildren }) => {
    const [isMobile, setIsMobile] = useState<boolean>(window.outerWidth <= 600);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.outerWidth <= 600);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <DeviceContext.Provider value={isMobile}>{children}</DeviceContext.Provider>;
};
