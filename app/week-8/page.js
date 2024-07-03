"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link'; 
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Modal from './Modal';

export default function HomePage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    const handleSignIn = async () => {
        await gitHubSignIn();
        setShowModal(false);
        router.push('/week-8'); 
    };

    const handleSignOut = async () => {
        await firebaseSignOut();
    };

    const handleAccessShoppingList = () => {
        if (!user) {
            setShowModal(true);
        } else {
            router.push('/week-8/shopping-list');
        }
    };

    return (
        <div className="min-h-screen bg-yellow-50 flex justify-center items-center">
            <div className="w-200 h-60 bg-teal-500 shadow-lg rounded-lg p-6 text-center">
                <h1 className="text-3xl font-bold mb-10">Welcome to Shopping List</h1>
                {!user ? (
                    <button
                        onClick={handleSignIn}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-2"
                    >
                        Login to GitHub
                    </button>
                ) : (
                    <div className="mb-2">
                        <p className="text-gray-700 mb-2">Welcome, {user.displayName} ({user.email})</p>
                        <button
                            onClick={handleSignOut}
                            className="bg-red-300 text-black px-4 py-2 rounded-md w-full"
                        >
                            Logout
                        </button>
                    </div>
                )}
                <div>
                    <button
                        onClick={handleAccessShoppingList}
                        className="bg-white text-black px-4 py-2 rounded-md w-full"
                    >
                        Go to Shopping List
                    </button>
                </div>
            </div>

            {showModal && (
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <div className="p-4">
                  <p className="mb-4 text-black">Please login to GitHub to access the shopping list</p>
                 
                </div>
              </Modal>
              )}
        </div>
    );
}
