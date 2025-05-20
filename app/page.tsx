"use client";
import Image from "next/image";
import FourPillars from "./FourPillars";

export default function Home() {
  const bubbleText1 = "이제 본격적으로\nOO님의 사주팔자를\n분석해볼 차례네요.";
  const bubbleText2 = "제가 oo님의 사주를\n보기 쉽게 표로 정리했어요."
  return (
    <div className="max-x-md relative">
      <Image
        className="object-contain w-full h-auto pt-4"
        src="/rocketdr.png"
        alt="asset"
        width="448"
        height="600"
      />
      <p
        className="absolute text-center break-keep whitespace-pre-line font-semibold text-[#424242]
                  sm:text-2xl sm:leading-10
                  min-[320px]:text-xl min-[320px]:leading-7"
        style={{
          top: "33.5%",
          left: "11%",
          width: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {bubbleText1}
      </p>
      <p
        className="absolute text-center break-keep whitespace-pre-line font-semibold text-[#424242]
                  sm:text-2xl sm:leading-10
                  min-[320px]:text-xl min-[320px]:leading-7"
        style={{
          top: "50.7%",
          left: "15%",
          width: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {bubbleText2}
      </p>
      <FourPillars />
    </div>
  );
}
