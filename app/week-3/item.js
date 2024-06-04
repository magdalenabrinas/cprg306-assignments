import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="w-1/4 flex items-center justify-between p-2 border-b bg-yellow-50 mb-2 border-black rounded">
      <div>
        <h3 className="text-base font-semibold text-black">{name}</h3>
        <p className="text-xs text-yellow-600">Category: <span className="text-black">{category}</span></p>
      </div>
      <div className="text-base font-bold text-black">{quantity}</div>
    </li>
  );
};

export default Item;
 