import styles from "./BottomSheet.module.scss";
import sheetCloseButtonUrl from "../assets/sheet-close-button.svg";
import { useRef, useState, useEffect } from "preact/hooks";
import { useBottomSheetContext } from "../context/BottomSheetContext";

enum SheetSize {
    FULL = 0.05 * window.innerHeight,
    HALF = window.innerHeight * 0.5,
    CLOSED = window.innerHeight,
}

const BottomSheet = () => {
    const { isOpen, content, closeSheet } = useBottomSheetContext();
    const sheetRef = useRef(null);
    const [sheetHeight, setSheetHeight] = useState(SheetSize.CLOSED);
    const [isDragging, setIsDragging] = useState(false);
    const snapThreshold = SheetSize.HALF;

    useEffect(() => {
        if (isOpen) {
            openSheet(SheetSize.FULL);
        }
    }, [isOpen]);

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDrag = (event) => {
        if (!isDragging) return;

        const clientY = event.touches ? event.touches[0].clientY : event.clientY;
        setSheetHeight(clientY);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;

        setIsDragging(false);
        setSheetHeight((prev) => (prev < snapThreshold ? 0 : snapThreshold));
    };

    const closeSheetAnimated = () => {
        setSheetHeight(SheetSize.CLOSED);
        setTimeout(() => closeSheet(), 300);
    };

    const openSheet = (targetSize: SheetSize) => {
        setSheetHeight(targetSize);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", handleDrag);
            document.addEventListener("mouseup", handleDragEnd);
            document.addEventListener("touchmove", handleDrag);
            document.addEventListener("touchend", handleDragEnd);
        } else {
            document.removeEventListener("mousemove", handleDrag);
            document.removeEventListener("mouseup", handleDragEnd);
            document.removeEventListener("touchmove", handleDrag);
            document.removeEventListener("touchend", handleDragEnd);
        }

        return () => {
            document.removeEventListener("mousemove", handleDrag);
            document.removeEventListener("mouseup", handleDragEnd);
            document.removeEventListener("touchmove", handleDrag);
            document.removeEventListener("touchend", handleDragEnd);
        };
    }, [isDragging]);

    return (
        isOpen && (
            <div
                className={styles.bottomSheet}
                ref={sheetRef}
                style={{
                    transform: `translateY(${sheetHeight}px)`,
                    height: `100vh`,
                    transition: isDragging ? "none" : "transform 0.3s ease-in-out",
                }}
            >
                <div
                    className={styles.handleArea}
                    onMouseDown={handleDragStart}
                    onTouchStart={handleDragStart}
                    onClick={() => {
                        openSheet(sheetHeight === SheetSize.FULL ? SheetSize.HALF : SheetSize.FULL);
                    }}
                >
                    <div className={styles.handleBar} />
                </div>
                <button className={styles.closeButton} onClick={closeSheetAnimated}>
                    <img src={sheetCloseButtonUrl} alt="Close" />
                </button>
                <div className={styles.bottomSheetContent}>{content}</div>
            </div>
        )
    );
};

export default BottomSheet;
