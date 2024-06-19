'use client';

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, quantity, category };
    onAddItem(newItem);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-yellow-50 shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
        />
      </div>
      <div className="mb-4 flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            max="99"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700"
          >
            <option value="produce" className="text-black">Produce</option>
            <option value="dairy" className="text-black">Dairy</option>
            <option value="bakery" className="text-black">Bakery</option>
            <option value="meat" className="text-black">Meat</option>
            <option value="frozen" className="text-black">Frozen Foods</option>
            <option value="canned" className="text-black">Canned Goods</option>
            <option value="dry" className="text-black">Dry Goods</option>
            <option value="beverages" className="text-black">Beverages</option>
            <option value="snacks" className="text-black">Snacks</option>
            <option value="household" className="text-black">Household</option>
            <option value="other" className="text-black">Other</option>
          </select>
        </div>
      </div>
      <div>
        <button type="submit" className="w-full bg-teal-700 text-white py-2 px-4 rounded-md hover:bg-red-300">
          Submit
        </button>
      </div>
    </form>
  );
}
