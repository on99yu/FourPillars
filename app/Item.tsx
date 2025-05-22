'use client'

import React from 'react';

interface FourPillarsItemProps {
  hanja: string;
  hangeul: string;
}

const Item: React.FC<FourPillarsItemProps> = ({ hanja, hangeul }) => {
  return (
    <div className="text-center font-semibold">
      <div className="text-lg max-[448px]:text-base max-[400px]:text-sm max-[330px]:text-xs max-[310px]:text-[0.625rem]">{hanja}</div>
      <div className="text-xs max-[448px]:text-[0.625rem] max-[400px]:text-[0.5rem] max-[330px]:text-[0.375rem]">({hangeul})</div>
    </div>
  );
};

export default Item;