'use client';

import React, { useState } from 'react';
import { useUserAuth } from '../_utils/auth-context'; // Adjust the path if necessary
import { Redirect } from 'react-router-dom'; // or the equivalent in your routing library
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

const Page = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItem = item.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '').trim();
    setSelectedItemName(cleanedItem);
  };

  if (!user) {
    // Optional: redirect to the landing page if the user is not logged in
    return <Redirect to="/" />;
  }

  return (
    <main className="p-8 bg-teal-500 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Shopping List</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex flex-col items-left w-1/4 p-4">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
};

export default Page;
