import { useContext } from "preact/hooks";
import { BottomSheetContext } from "../context/BottomSheetContext";

export const useBottomSheet = () => {
    const context = useContext(BottomSheetContext);

    if (!context) {
        throw new Error("useBottomSheet must be used within a BottomSheetProvider");
    }

    return context;
};
