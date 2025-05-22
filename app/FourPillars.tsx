// components/FourPillars.tsx
"use client";
import Image from "next/image";
import Item from "./Item";
import SideItem from "./SideItem";
export default function FourPillars() {

  const smallfont = 'text-[0.55rem] max-[448px]:text-[0.5rem] max-[400px]:text-[0.45rem] max-[330px]:text-[0.4rem]'
  const bigfont = 'text-3xl max-[448px]:text-2xl max-[400px]:text-xl max-[330px]:text-lg font-normal'
  return (
    <div
      id="1"
      className="absolute z-10 left-1/2 top-[81.5%] -translate-x-1/2 -translate-y-1/2
                    w-[95%] max-w-full aspect-[2/3.5]
                    flex items-center justify-center
                    border-4 border-[#1B2F49] 
                    shadow-md bg-[#F5F3EC]"
    >
      <div
        id="2"
        className="w-full h-[98.5%]
                   flex items-center justify-center
                    border-t-2 border-b-2 border-[#1B2F49]"
      >
        <div
          id="3"
          className="w-[98%] h-[103%]
                      max-[350px]:h-[103%]
                      flex flex-col items-start justify-center 
                      border-r-2 border-l-2 border-[#1B2F49]"
        >
          <div
            id="4"
            className="w-full h-[15%] 
                      mt-[2%] 
                      flex items-cetner justify-between "
          >
            <div
              className="w-[16%] max-w-[70px] 
                            aspect-square relative"
            >
              <Image
                src="/design1.png"
                alt="design1"
                fill
                className="object-contain"
              />
            </div>
            <div
              className="w-[50%]
                            flex flex-col items-center justify-center
                            text-center"
            >
              <div
                className="text-base 
                              max-[448px]:text-sm
                              max-[400px]:text-xs
                              font-semibold text-[#424242] whitespace-nowrap"
              >
                김로켓님의 사주
              </div>
              <div
                className="text-lg 
                              max-[448px]:text-base
                              max-[400px]:text-sm
                              font-bold text-[#424242] whitespace-nowrap truncate"
              >
                1980년 8월 27일 08:10
              </div>
            </div>
            <div
              className="w-[16%] max-w-[70px]
                            aspect-square relative"
            >
              <Image
                src="/design2.png"
                alt="design2"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div
            className="w-full h-[90%]
                       flex justify-center px-[2.5%] pb-[7%]
              "
          >
            <table className="w-full h-full table-fixed border-collapse">
              <thead>
                <tr className="font-semibold text-xl max-[448px]:text-lg max-[400px]:text-base max-[330px]:text-sm ">
                  <th className="border-b border-r w-[18%]"></th>
                  <th className="border-b border-r  border-r-gray-400 py-2">
                    時
                  </th>
                  <th className=" border-b border-r  border-r-gray-400 py-2">
                    日
                  </th>
                  <th className=" border-b border-r  border-r-gray-400 py-2">
                    月
                  </th>
                  <th className="border-b border-r py-2">年</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="border-b border-r">
                    <SideItem hanja="十星" hangeul="십성" />
                  </td>
                  <td className="border-b border-r border-r-gray-400">
                    <Item hanja="傷官" hangeul="상관" />
                  </td>
                  <td className="border-b border-r border-r-gray-400">
                    <Item hanja="比肩" hangeul="비견" />
                  </td>
                  <td className="border-b border-r border-r-gray-400">
                    <Item hanja="傷官" hangeul="상관" />
                  </td>
                  <td className="border-b border-r">
                    <Item hanja="傷官" hangeul="상관" />
                  </td>
                </tr>
                {/*  */}
                <tr>
                  <td className="border-b border-r">
                    <SideItem hanja="天干" hangeul="천간" />
                  </td>
                  <td className="border-b border-r border-r-gray-400 h-[15%]">
                    <div className="flex justify-center">
                      <div
                        className={`w-[90%] aspect-square relative
                            rounded-xl bg-gray-700 text-white`}
                      >
                        <div className="absolute inset-0 flex flex-col justify-center text-center leading-2">
                          <div className={`${smallfont}`}>임</div>
                          <div className={`${bigfont}`}>壬</div>
                          <div className={`${smallfont}`}>陽水</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="w-1/5 border-b border-r border-r-gray-400">
                    <div className="flex justify-center">
                      <div
                        className={`relative w-[90%] aspect-square 
                            rounded-xl bg-red-500 text-white`}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-2">
                          <div className={`${smallfont}`}>정</div>
                          <div className={`${bigfont}`}>丁</div>
                          <div className={`${smallfont}`}>陰火</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="w-1/5 border-b border-r border-r-gray-400">
                    <div className="flex justify-center">
                      <div
                        className={`relative w-[90%] aspect-square 
                            rounded-xl bg-gray-700 text-white`}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-2">
                          <div className={`${smallfont}`}>계</div>
                          <div className={`${bigfont}`}>癸</div>
                          <div className={`${smallfont}`}>陽水</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="w-1/5 border-b border-r">
                    <div className="flex justify-center">
                      <div
                        className={`relative w-[90%] aspect-square
                            rounded-xl bg-gray-700 text-white`}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-2">
                          <div className={`${smallfont}`}>계</div>
                          <div className={`${bigfont}`}>癸</div>
                          <div className={`${smallfont}`}>陽水</div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                {/*  */}
                <tr>
                  <td className="border-b border-r">
                    <SideItem hanja="地支" hangeul="지지" />
                  </td>
                  <td className="border-b border-r border-r-gray-400 h-[15%]">
                    <div className="flex justify-center">
                      <div
                        className={`relative w-[90%] aspect-square
                            rounded-xl bg-green-900 text-white`}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-2">
                          <div className={`${smallfont}`}>인</div>
                          <div className={`${bigfont}`}>寅</div>
                          <div className={`${smallfont}`}>陽木</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-r border-r-gray-400">
                    <div className="flex justify-center">
                      <div
                        className={`relative w-[90%] aspect-square
                            rounded-xl bg-red-500 text-white`}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-2">
                          <div className={`${smallfont}`}>사</div>
                          <div className={`${bigfont}`}>巳</div>
                          <div className={`${smallfont}`}>陰火</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="w-1/5 border-b border-r border-r-gray-400">
                    <div className="flex justify-center">
                      <div
                        className={`relative w-[90%] aspect-square
                            rounded-xl bg-gray-700 text-white`}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-2">
                          <div className={`${smallfont}`}>해</div>
                          <div className={`${bigfont}`}>亥</div>
                          <div className={`${smallfont}`}>陰水</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="w-1/5 border-b border-r">
                    <div className="flex justify-center">
                      <div
                        className={`relative w-[90%] aspect-square
                            border-2 rounded-xl bg-white text-black`}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-2">
                          <div className={`${smallfont}`}>유</div>
                          <div className={`${bigfont}`}>酉</div>
                          <div className={`${smallfont}`}>陰金</div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-r  py-1">
                    <SideItem hanja="十星" hangeul="십성" />
                  </td>
                  <td className="border-b border-r border-r-gray-400">
                    <Item hanja="比肩" hangeul="비견" />
                  </td>
                  <td className="border-b border-r border-r-gray-400">
                    <Item hanja="劫財" hangeul="겁재" />
                  </td>
                  <td className="border-b border-r border-r-gray-400">
                    <Item hanja="食神" hangeul="식신" />
                  </td>
                  <td className="border-b border-r">
                    <Item hanja="偏財" hangeul="편재" />
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-r py-1">
                    <SideItem hanja="十二運星" hangeul="십이운성 " />
                  </td>
                  <td className="border-b border-r border-r-gray-400 ">
                    <Item hanja="死" hangeul="사 " />
                  </td>
                  <td className="border-b border-r border-r-gray-400">
                    <Item hanja="帝旺" hangeul="제왕" />
                  </td>
                  <td className="border-b border-r border-r-gray-400">
                    <Item hanja="胎" hangeul="태" />
                  </td>
                  <td className="border-b border-r ">
                    <Item hanja="長生" hangeul="장생" />
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-r py-1">
                    <SideItem hanja="十二神殺" hangeul="십이신살" />
                  </td>
                  <td className="border-b border-r border-r-gray-400">
                    <Item hanja="劫殺" hangeul="겁살" />
                  </td>
                  <td className="border-b border-r border-r-gray-400">
                    <Item hanja="地殺" hangeul="지살" />
                  </td>
                  <td className="border-b border-r border-r-gray-400">
                    <Item hanja="驛馬殺" hangeul="역마살" />
                  </td>
                  <td className="border-b border-r ">
                    <Item hanja="將星殺" hangeul="장성살" />
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-r">
                    <SideItem hanja="貴人" hangeul="귀인 " />
                  </td>
                  <td className="border-b border-r border-r-gray-400">
                    <Item hanja="傷官" hangeul="상관" />
                  </td>
                  <td className="border-b border-r border-r-gray-400">
                    <Item hanja="比肩" hangeul="비견" />
                  </td>
                  <td className="border-b border-r border-r-gray-400">
                    <Item hanja="天乙" hangeul="천을귀인" />
                  </td>
                  <td className="border-b border-r ">
                    <div className="flex flex-col">
                      <Item hanja="天乙" hangeul="천을귀인" />
                      <Item hanja="太極" hangeul="태극귀인" />
                      <Item hanja="文昌" hangeul="문창귀인" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
