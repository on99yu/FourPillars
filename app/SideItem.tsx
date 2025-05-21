'use client'

import React from 'react';

interface FourPillarsItemProps {
  hanja: string;
  hangeul: string;
}

const SideItem: React.FC<FourPillarsItemProps> = ({ hanja, hangeul }) => {
  return (
    <div className="text-center font-semibold">
      <div className="text-sm max-[450px]:text-xs max-[400px]:text-[0.625rem] max-[330px]:text-[0.5rem] max-[310px]:text-[0.375rem]">{hanja}</div>
      <div className="text-xs max-[450px]:text-[0.625rem] max-[400px]:text-[0.5rem] max-[330px]:text-[0.375rem]">({hangeul})</div>
    </div>
  );
};

export default SideItem;