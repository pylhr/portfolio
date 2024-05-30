'use client'
import { useEffect, useState } from 'react';

interface GuestbookEntry {
  name: string;
  message: string;
}

const Guestbook = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);

  useEffect(() => {
    // Assuming you have a function to fetch guestbook entries from your backend/database
    // For demonstration purposes, let's just use dummy data
    const dummyEntries: GuestbookEntry[] = [
      { name: 'User 1', message: 'Hello from User 1' },
      { name: 'User 2', message: 'Hello from User 2' },
      // Add more entries as needed
    ];
    setEntries(dummyEntries);
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-lg mx-auto"> {/* Adjust the max width as needed */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Guestbook Entries</h1>
        {entries.map((entry, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{entry.name}</h2>
            <p className="text-gray-600 mb-4">{entry.message}</p>
            <hr className="border-t border-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;