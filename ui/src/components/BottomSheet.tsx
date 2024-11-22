import './BottomSheet.scss'
import sheetCloseButtonUrl from '../assets/sheet-close-button.svg';
import { useRef, useState, useEffect } from "preact/hooks";
import { useBottomSheetContext } from '../context/BottomSheetContext';

enum SheetSize {
    FULL = 0,
    HALF = window.innerHeight * 0.5,
    EMPTY = window.innerHeight,
}

export function BottomSheet() {
    const { isOpen, content, closeSheet } = useBottomSheetContext();
    const sheetRef = useRef(null);
    const [sheetHeight, setSheetHeight] = useState(SheetSize.EMPTY);
    const [isDragging, setIsDragging] = useState(false);
    const snapThreshold = SheetSize.HALF;
    const animatonStep = 100;
    const animationFrameCount = 32;

    useEffect(() => {
        if (isOpen) {
            openSheet(snapThreshold);
        }
    }, [isOpen]);

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDrag = (event) => {
        if (!isDragging) {
            return;
        }
        const clientY = event.touches ? event.touches[0].clientY : event.clientY;
        setSheetHeight(clientY);
    };

    const handleDragEnd = () => {
        if (!isDragging) {
            return;
        }

        setIsDragging(false);
        setSheetHeight((prev) => (prev < snapThreshold ? 0 : snapThreshold));
    };

    const closeSheetAnimated = () => {
        const closeInterval = setInterval(() => {
            setSheetHeight((prev) => {
                if (prev >= window.innerHeight) {
                    clearInterval(closeInterval);
                    closeSheet();
                    return prev;
                }
                return prev + animatonStep;
            });
        }, animationFrameCount);
    };

    const openSheet = (targetSize: SheetSize) => {
        const openInterval = setInterval(() => {
            setSheetHeight((prev) => {
                if (prev <= targetSize) {
                    clearInterval(openInterval);
                    return targetSize;
                }
                return prev - animatonStep;
            });
        }, animationFrameCount);
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
            <div class="bottom-sheet"
                ref={sheetRef}
                style={{
                    height: `calc(100vh - ${sheetHeight}px)`,
                    transition: isDragging ? "none" : "height 0.2s",
                }}
            >
                <div class="handle-area"
                    onMouseDown={handleDragStart}
                    onTouchStart={handleDragStart}
                    onClick={() => { openSheet(sheetHeight == SheetSize.FULL ? SheetSize.HALF : SheetSize.FULL); }}
                >
                    <div class="handle-bar"
                    />
                </div>

                <button class="close-button"
                    onClick={closeSheetAnimated}
                >
                    <img src={sheetCloseButtonUrl} alt="Close" />
                </button>

                <div class="content">{content}</div>
            </div>
        )
    );
}
