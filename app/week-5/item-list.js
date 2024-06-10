'use client';

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  // Function to sort items based on sortBy state
  const sortItems = (items) => {
    return [...items].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  };

  const sortedItems = sortItems(itemsData);

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-3 py-2 border rounded-md ${
            sortBy === 'name' ? 'bg-red-300 border-blue-500' : 'border-gray-300'
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-3 py-2 border rounded-md ${
            sortBy === 'category' ? 'bg-red-300 border-blue-500' : 'border-gray-300'
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('group')}
          className={`px-3 py-2 border rounded-md ${
            sortBy === 'group' ? 'bg-red-300 border-blue-500' : 'border-gray-300 py'
          }`}
        >
          Group by Category
        </button>
      </div>
      <ul className="space-y-4">
        {sortBy === 'group'
          ? Object.entries(
              sortedItems.reduce((acc, item) => {
                acc[item.category] = acc[item.category] || [];
                acc[item.category].push(item);
                return acc;
              }, {})
            ).map(([category, items]) => (
              <div key={category}>
                <h3 className="capitalize text-xl font-bold ">{category}</h3>
                {items.sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => (
                  <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
              </div>
            ))
          : sortedItems.map((item, index) => (
              <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
      </ul>
    </div>
  );
};

export default ItemList;
