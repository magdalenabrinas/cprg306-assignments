'use client';

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import Modal from '../Modal'; // Correct import with correct casing

const Page = () => {
  const { user, gitHubSignIn } = useUserAuth(); // Use the useUserAuth hook
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!user) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [user, router]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItem = item.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '').trim();
    setSelectedItemName(cleanedItem);
  };

  const handleLogin = async () => {
    await gitHubSignIn();
    setShowModal(false);
    router.push('/week-8/shopping-list'); 
  };

  if (!user && !showModal) {
    // Render a loading state or nothing while redirecting
    return null;
  }

  return (
    <main className="p-8 bg-teal-500 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Shopping List</h1>
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          {/* <p>Please login to GitHub to access the shopping list</p> */}
          <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Login to GitHub
          </button>
        </Modal>
      )}
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
