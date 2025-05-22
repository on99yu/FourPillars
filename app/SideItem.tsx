'use client'

import React from 'react';

interface FourPillarsItemProps {
  hanja: string;
  hangeul: string;
}

const SideItem: React.FC<FourPillarsItemProps> = ({ hanja, hangeul }) => {
  return (
    <div className="text-center font-semibold">
      <div className="text-xs max-[448px]:text-[0.625rem] max-[400px]:text-[0.55rem] max-[330px]:text-[0.5rem] ">{hanja}</div>
      <div className="text-[0.625rem] max-[448px]:text-[0.55rem] max-[400px]:text-[0.5rem] max-[330px]:text-[0.45rem]">({hangeul})</div>
    </div>
  );
};

export default SideItem;