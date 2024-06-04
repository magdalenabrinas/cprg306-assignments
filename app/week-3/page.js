import React from 'react';
import ItemList from './item-list';  

const Page = ({ data }) => {
  return (
    <main className="p-8 bg-teal-500 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Shopping List</h1>
      <ItemList items={data} />
    </main>
  );
};

export default Page;

