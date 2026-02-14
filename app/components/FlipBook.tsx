"use client";

const pages: string[] = [];
for (let i = 1; i <= 50; i++) {
  const name = `/pages/${i}.png`;
  pages.push(name);
}
import dynamic from "next/dynamic";
import type {
  IEventProps,
  IFlipSetting,
} from "react-pageflip/build/html-flip-book/settings";

interface HTMLFlipPageOverride extends Partial<IFlipSetting & IEventProps> {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  renderOnlyPageLengthChange?: boolean;
}

const HTMLFlipBook = dynamic(() => import("react-pageflip"), {
  ssr: false,
}) as React.ComponentType<HTMLFlipPageOverride>;

export default function FlipBook() {
  const flipProps = {
    width: 500,
    height: 700,
    size: "stretch",
    minWidth: 315,
    maxWidth: 1000,
    minHeight: 400,
    maxHeight: 1536,
    startPage: 0,
    drawShadow: true,
    flippingTime: 1000,
    usePortrait: true,
    startZIndex: 0,
    autoSize: true,
    maxShadowOpacity: 0.5,
    showCover: true,
    mobileScrollSupport: true,
    style: {},
  };
  return (
    <div className="flex justify-center py-10">
      <HTMLFlipBook width={600} height={800}>
        {pages.map((src, index) => (
          <div key={index} className="bg-white">
            <img
              src={src}
              alt={`Page ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
