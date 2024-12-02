import { useContext, useState, useCallback } from "preact/hooks";
import { createContext } from "preact";
import { JSX } from "preact/jsx-runtime";

// Define the context type interface
interface BottomSheetContextType {
    isOpen: boolean;
    content: JSX.Element | null;
    closeSheet: () => void;
    openSheet: (component: JSX.Element) => void;
    toggleSheet: (component?: JSX.Element) => void;
}

// Create the BottomSheetContext with an undefined default value
export const BottomSheetContext = createContext<BottomSheetContextType | undefined>(
    undefined
);

export const BottomSheetProvider = ({ children }: { children: JSX.Element }) => {
    const [isOpen, setIsOpen] = useState(false); // State to track if the bottom sheet is open
    const [content, setContent] = useState<JSX.Element | null>(null); // State to hold the content of the bottom sheet

    // Function to open the bottom sheet with the provided component
    const openSheet = useCallback((component: JSX.Element) => {
        setContent(component);
        setIsOpen(true);
    }, []);

    // Function to close the bottom sheet
    const closeSheet = useCallback(() => {
        setIsOpen(false);
        setContent(null);
    }, []);

    // Function to toggle the bottom sheet open/close state
    const toggleSheet = useCallback(
        (component?: JSX.Element) => {
            if (isOpen) {
                closeSheet();
            } else if (component) {
                openSheet(component);
            }
        },
        [isOpen, closeSheet, openSheet]
    );

    return (
        <BottomSheetContext.Provider
            value={{ isOpen, content, openSheet, closeSheet, toggleSheet }}
        >
            {children}
        </BottomSheetContext.Provider>
    );
};

// Custom hook to use the BottomSheetContext
export const useBottomSheetContext = () => {
    const context = useContext(BottomSheetContext);
    if (!context) {
        throw new Error(
            "useBottomSheetContext must be used within a BottomSheetProvider"
        );
    }
    return context;
};
