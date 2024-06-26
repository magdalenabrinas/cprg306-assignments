'use client';

import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  const buyMessage = `Buy ${quantity} in ${category}`;
  
  return (
    <li 
      className=" p-4 border rounded-md bg-yellow-50 text-base font-bold text-black mb-4 max-w-md mx-auto cursor-pointer"
      onClick={onSelect}
    >
      <p>{name}</p>
      <p className="text-yellow-600">{buyMessage}</p>
    </li>
  );
};

export default Item;
