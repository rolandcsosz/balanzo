import { useContext, useState, useCallback } from "preact/hooks";
import { createContext } from "preact";
import { JSX } from "preact/jsx-runtime";

interface BottomSheetContextType {
    isOpen: boolean;
    content: JSX.Element | null;
    closeSheet: () => void;
    openSheet: (component: JSX.Element) => void;

    toggleSheet: (component?: JSX.Element) => void;
}

export const BottomSheetContext = createContext<BottomSheetContextType | undefined>(
    undefined
);

export const BottomSheetProvider = ({ children }: { children: JSX.Element }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<JSX.Element | null>(null);

    const openSheet = useCallback((component: JSX.Element) => {
        setContent(component);
        setIsOpen(true);
    }, []);

    const closeSheet = useCallback(() => {
        setIsOpen(false);
        setContent(null);
    }, []);

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

export const useBottomSheetContext = () => {
    const context = useContext(BottomSheetContext);
    if (!context) {
        throw new Error(
            "useBottomSheetContext must be used within a BottomSheetProvider"
        );
    }
    return context;
};
