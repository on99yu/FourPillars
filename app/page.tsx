"use client";
import Image from "next/image";
import FourPillars from "./FourPillars";

export default function Home() {
  const bubbleText1 = "이제 본격적으로\nOO님의 사주팔자를\n분석해볼 차례네요.";
  const bubbleText2 = "제가 oo님의 사주를\n보기 쉽게 표로 정리했어요.";
  return (
    <div className="max-x-md relative">
      <div className="x-full max-w-[448px] mx-auto">
        <Image
          className="object-contain w-full h-auto pt-4"
          src="/rocketdr.png"
          alt="asset"
          width="448"
          height="600"
        />
      </div>
      <p
        className="absolute text-center break-keep whitespace-pre-line font-semibold text-[#424242]
                    text-xl leading-7         
                  max-[380px]:text-lg max-[380px]:leading-6
                  max-[350px]:text-base max-[350px]:leading-5"
        style={{
          top: "33.8%",
          left: "11%",
          width: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {bubbleText1}
      </p>
      <p
        className="absolute text-center break-keep whitespace-pre-line font-semibold text-[#424242]
                   text-xl leading-7
                  max-[380px]:text-lg max-[380px]:leading-6
                  max-[350px]:text-base max-[350px]:leading-5"
        style={{
          top: "50.9%",
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
