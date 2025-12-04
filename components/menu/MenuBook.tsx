"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";

// Types
interface SheetData {
    front: { src: string; alt: string };
    back: { src: string; alt: string };
}

// Hook for mobile detection
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        // Listener
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

// Sheet Component
const Sheet = ({
    data,
    index,
    flipped,
    zIndex,
    onFlip,
    isMobile,
}: {
    data: SheetData;
    index: number;
    flipped: boolean;
    zIndex: number;
    onFlip: () => void;
    isMobile: boolean;
}) => {
    return (
        <div
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out transform-style-3d cursor-pointer ${isMobile ? 'origin-top' : 'origin-left'
                }`}
            style={{
                zIndex: zIndex,
                transform: isMobile
                    ? (flipped ? "rotateX(180deg)" : "rotateX(0deg)")
                    : (flipped ? "rotateY(-180deg)" : "rotateY(0deg)"),
            }}
            onClick={onFlip}
        >
            {/* Front Face */}
            <div
                className={`absolute inset-0 w-full h-full backface-hidden bg-white shadow-md overflow-hidden ${isMobile ? 'rounded-b-sm' : 'rounded-r-sm'
                    }`}
                style={{ zIndex: 2 }}
            >
                <div className="relative w-full h-full">
                    <Image
                        src={data.front.src}
                        alt={data.front.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    {/* Gradient overlay for depth on the spine */}
                    <div
                        className={`absolute ${isMobile
                            ? 'inset-x-0 top-0 h-4 bg-gradient-to-b'
                            : 'inset-y-0 left-0 w-4 bg-gradient-to-r'
                            } from-black/20 to-transparent pointer-events-none`}
                    />
                </div>
            </div>

            {/* Back Face */}
            <div
                className={`absolute inset-0 w-full h-full backface-hidden bg-white shadow-md overflow-hidden ${isMobile ? 'rounded-t-sm' : 'rounded-l-sm'
                    }`}
                style={{
                    transform: isMobile ? "rotateX(180deg)" : "rotateY(180deg)",
                    zIndex: 1
                }}
            >
                <div className="relative w-full h-full">
                    <Image
                        src={data.back.src}
                        alt={data.back.alt}
                        fill
                        className="object-cover"
                    />
                    {/* Gradient overlay for depth on the spine */}
                    <div
                        className={`absolute ${isMobile
                            ? 'inset-x-0 bottom-0 h-4 bg-gradient-to-t'
                            : 'inset-y-0 right-0 w-4 bg-gradient-to-l'
                            } from-black/20 to-transparent pointer-events-none`}
                    />
                </div>
            </div>
        </div>
    );
};

export default function MenuBook() {
    const [flippedIndex, setFlippedIndex] = useState(-1); // -1 means no pages flipped (Cover visible)
    const isMobile = useIsMobile();

    // Data Definition
    const coverImage = "/menu/coverpage.png";
    const endCoverImage = "/menu/endcoverpage.png";
    const backPattern = "/menu/all page backimage.png";
    const contentPages = [
        "/menu/1page.png",
        "/menu/2page.png",
        "/menu/3page.png",
        "/menu/4page.png",
        "/menu/5page.png",
        "/menu/6page.png",
    ];

    // Construct Sheets
    const sheets: SheetData[] = [
        // Cover
        {
            front: { src: coverImage, alt: "Cover" },
            back: { src: backPattern, alt: "Inside Cover" },
        },
        // Content Pages (Each page is a separate sheet with pattern on back)
        ...contentPages.map((page, index) => ({
            front: { src: page, alt: `Page ${index + 1}` },
            back: { src: backPattern, alt: "Pattern" },
        })),
        // End Cover
        {
            front: { src: backPattern, alt: "Inside Back Cover" },
            back: { src: endCoverImage, alt: "End Cover" },
        },
    ];

    const totalSheets = sheets.length;

    const handleNext = () => {
        if (flippedIndex < totalSheets - 1) {
            setFlippedIndex(flippedIndex + 1);
        }
    };

    const handlePrev = () => {
        if (flippedIndex >= 0) {
            setFlippedIndex(flippedIndex - 1);
        }
    };

    const handleSheetClick = (index: number) => {
        if (index <= flippedIndex) {
            // Clicked on a flipped page, go back
            setFlippedIndex(index - 1);
        } else {
            // Clicked on an unflipped page, go forward
            setFlippedIndex(index);
        }
    };

    // Calculate container transform for centering
    // Mobile:
    // -1 (Start): translateY(0%) -> Centered on Bottom Page (Cover)
    // Open: translateY(50%) -> Centered on Spine (Spread)
    // End: translateY(100%) -> Centered on Top Page (End Cover)
    // Desktop:
    // -1 (Start): translateX(0%) -> Centered on Right Page (Cover)
    // Middle: translateX(50%) -> Centered on Spine (Spread)
    // End: translateX(100%) -> Centered on Left Page (End Cover)
    const getContainerTransform = () => {
        if (isMobile) {
            if (flippedIndex === -1) return "translateY(0%)";
            if (flippedIndex === totalSheets - 1) return "translateY(100%)";
            return "translateY(50%)";
        }

        if (flippedIndex === -1) return "translateX(0%)";
        if (flippedIndex === totalSheets - 1) return "translateX(100%)";
        return "translateX(50%)";
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-[80vh] w-full py-10 perspective-1500">

            {/* Book Container */}
            <div
                className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] transition-transform duration-700 ease-in-out"
                style={{ transform: getContainerTransform() }}
            >
                {/* Placeholder for the left side (Desktop only) */}
                {!isMobile && <div className="absolute top-0 right-full w-full h-full" />}

                {/* Sheets */}
                {sheets.map((sheet, index) => {
                    const isFlipped = index <= flippedIndex;
                    // Z-Index Logic:
                    // If flipped: Stack ascending (0 at bottom, last flipped at top)
                    // If not flipped: Stack descending (0 at top, last at bottom)
                    const zIndex = isFlipped ? index : totalSheets - index;

                    return (
                        <Sheet
                            key={index}
                            index={index}
                            data={sheet}
                            flipped={isFlipped}
                            zIndex={zIndex}
                            onFlip={() => handleSheetClick(index)}
                            isMobile={isMobile}
                        />
                    );
                })}
            </div>

            {/* Controls */}
            <div className="mt-12 flex items-center gap-6 text-white/80 z-20">
                <button
                    onClick={handlePrev}
                    disabled={flippedIndex === -1}
                    className="p-3 rounded-full bg-stone-800/50 hover:bg-amber-500 hover:text-stone-900 transition-all backdrop-blur-sm border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    {isMobile ? <ChevronUp className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
                </button>

                <span className="text-sm font-medium tracking-widest uppercase">
                    {isMobile ? "Tap to Flip" : "Flip to Read"}
                </span>

                <button
                    onClick={handleNext}
                    disabled={flippedIndex === totalSheets - 1}
                    className="p-3 rounded-full bg-stone-800/50 hover:bg-amber-500 hover:text-stone-900 transition-all backdrop-blur-sm border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    {isMobile ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                </button>
            </div>

            {/* Global Styles for 3D utilities */}
            <style jsx global>{`
        .perspective-1500 {
          perspective: 1500px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
        </div>
    );
}
