// components/FourPillars.tsx
"use client";
import Image from "next/image";
// import Item from "./Item";

export default function FourPillars() {
  return (
    <div
      className="absolute z-10 left-1/2 top-[78.5%] -translate-x-1/2 -translate-y-1/2
                    w-[90%] max-w-full aspect-[2/3]
                    flex items-center justify-center
                    border-4 border-[#1B2F49] shadow-md bg-[#F5F3EC]"
    >
      <div className="w-full h-[98%] border-t-2 border-b-2 border-[#1B2F49] flex items-center justify-center">
        <div
          className="w-[98%] h-[102.5%] flex flex-col items-center justify-start
                        border-r-2 border-l-2 border-[#1B2F49]
                        p-2 space-y-2"
        >
          <div className="flex items-start justify-between max-w-full overflow-hidden
                        ">
            <Image
              src="/design1.png"
              alt="asset"
              width={80}
              height={80}
              className="flex-shrink-0"
            />

            <div className="text-center">
              <div className="text-lg font-semibold text-[#424242] whitespace-nowrap">
                김로켓님의 사주
              </div>
              <div className="text-xl font-bold text-[#424242] whitespace-nowrap truncate">
                1980년 8월 27일 08:10
              </div>
            </div>

            <Image
              src="/design2.png"
              alt="asset"
              width={80}
              height={80}
              className="flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
