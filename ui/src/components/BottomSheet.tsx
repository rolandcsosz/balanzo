import "./BottomSheet.scss";
import sheetCloseButtonUrl from "../assets/sheet-close-button.svg";
import { useRef, useState, useEffect } from "preact/hooks";
import { useBottomSheetContext } from "../context/BottomSheetContext";

enum SheetSize {
    FULL = 0,
    HALF = window.innerHeight * 0.5,
    CLOSED = window.innerHeight,
}

export function BottomSheet() {
    const { isOpen, content, closeSheet } = useBottomSheetContext();
    const sheetRef = useRef(null);
    const [sheetHeight, setSheetHeight] = useState(SheetSize.CLOSED);
    const [isDragging, setIsDragging] = useState(false);
    const snapThreshold = SheetSize.HALF;
    const animatonStep = 100;
    const animationFrameCount = 32;

    useEffect(() => {
        if (isOpen) {
            openSheet(snapThreshold); // Open sheet to half size when isOpen is true
        }
    }, [isOpen]);

    const handleDragStart = () => {
        setIsDragging(true); // Set dragging state to true
    };

    const handleDrag = (event) => {
        if (!isDragging) {
            return;
        }
        const clientY = event.touches ? event.touches[0].clientY : event.clientY; // Get Y coordinate from event
        setSheetHeight(clientY); // Set sheet height based on drag position
    };

    const handleDragEnd = () => {
        if (!isDragging) {
            return;
        }

        setIsDragging(false); // Set dragging state to false
        setSheetHeight((prev) => (prev < snapThreshold ? 0 : snapThreshold)); // Snap to closest threshold
    };

    const closeSheetAnimated = () => {
        const closeInterval = setInterval(() => {
            setSheetHeight((prev) => {
                if (prev >= window.innerHeight) {
                    clearInterval(closeInterval); // Clear interval when sheet is fully closed
                    closeSheet(); // Close the sheet
                    return prev;
                }
                return prev + animatonStep; // Increment sheet height
            });
        }, animationFrameCount);
    };

    const openSheet = (targetSize: SheetSize) => {
        const openInterval = setInterval(() => {
            setSheetHeight((prev) => {
                if (prev <= targetSize) {
                    clearInterval(openInterval); // Clear interval when target size is reached
                    return targetSize;
                }
                return prev - animatonStep; // Decrement sheet height
            });
        }, animationFrameCount);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", handleDrag); // Add mousemove event listener
            document.addEventListener("mouseup", handleDragEnd); // Add mouseup event listener
            document.addEventListener("touchmove", handleDrag); // Add touchmove event listener
            document.addEventListener("touchend", handleDragEnd); // Add touchend event listener
        } else {
            document.removeEventListener("mousemove", handleDrag); // Remove mousemove event listener
            document.removeEventListener("mouseup", handleDragEnd); // Remove mouseup event listener
            document.removeEventListener("touchmove", handleDrag); // Remove touchmove event listener
            document.removeEventListener("touchend", handleDragEnd); // Remove touchend event listener
        }

        return () => {
            document.removeEventListener("mousemove", handleDrag); // Cleanup mousemove event listener
            document.removeEventListener("mouseup", handleDragEnd); // Cleanup mouseup event listener
            document.removeEventListener("touchmove", handleDrag); // Cleanup touchmove event listener
            document.removeEventListener("touchend", handleDragEnd); // Cleanup touchend event listener
        };
    }, [isDragging]);

    return (
        isOpen && (
            <div
                class="bottom-sheet"
                ref={sheetRef}
                style={{
                    transform: `translateY(${sheetHeight}px)`, // Translate sheet based on height
                    height: `100vh`,
                    transition: isDragging ? "none" : "height 0.2s", // Disable transition during drag
                }}
            >
                <div
                    class="handle-area"
                    onMouseDown={handleDragStart} // Start drag on mousedown
                    onTouchStart={handleDragStart} // Start drag on touchstart
                    onClick={() => {
                        openSheet(sheetHeight == SheetSize.FULL ? SheetSize.HALF : SheetSize.FULL);
                    }} // Toggle sheet size on click
                >
                    <div class="handle-bar" />
                </div>
                <button
                    class="close-button"
                    onClick={closeSheetAnimated} // Close sheet with animation
                >
                    <img src={sheetCloseButtonUrl} alt="Close" />
                </button>
                <div class="bottom-sheet-content">{content}</div> {/* Render sheet content */}
            </div>
        )
    );
}
