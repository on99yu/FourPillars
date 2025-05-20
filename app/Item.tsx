'use client'

import React from 'react';

interface FourPillarsItemProps {
  hanja: string;
  hangeul: string;
}

const Item: React.FC<FourPillarsItemProps> = ({ hanja, hangeul }) => {
  return (
    <div className="text-center font-serif font-semibold">
      <div className="text-xl">{hanja}</div>
      <div className="text-sm">({hangeul})</div>
    </div>
  );
};

export default Item;