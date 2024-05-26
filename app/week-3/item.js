import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex items-center justify-between p-2 border-b border-black bg-white mb-2">
      <div className="w-3/4">
        <h3 className="text-base font-semibold text-black">{name}</h3>
        <p className="text-xs text-yellow-600">Category: <span className="text-black">{category}</span></p>
      </div>
      <span className="text-base font-bold text-black">{quantity}</span>
    </li>
  );
};

export default Item;
