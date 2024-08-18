'use client';

import { useState } from 'react';
import { emailDomains, generateRandomEmail, generateNameVariations } from '../utils/emailUtils';

export default function EmailGenerator() {
  const [emails, setEmails] = useState([]);
  const [count, setCount] = useState(1);
  const [provider, setProvider] = useState(emailDomains[0]); // Default ke domain pertama
  const [baseName, setBaseName] = useState(''); // Nama dasar yang dimasukkan
  const [loading, setLoading] = useState(false);

  const generateEmails = () => {
    setLoading(true);
    const generatedEmails = new Set(); // Gunakan Set untuk menyimpan email yang unik

    const generateUniqueEmails = () => {
      while (generatedEmails.size < count) {
        const variations = generateNameVariations(baseName);
        const email = `${variations[Math.floor(Math.random() * variations.length)]}@${provider}`;

        if (!generatedEmails.has(email)) {
          generatedEmails.add(email);
        }
      }
      setEmails(Array.from(generatedEmails)); // Konversi Set ke Array
    };

    setTimeout(() => {
      generateUniqueEmails();
      setLoading(false);
    }, 1000); // Simulasi loading
  };

  const clearEmails = () => {
    setEmails([]);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="count" className="block text-sm font-medium text-gray-700">
          Jumlah Email
        </label>
        <input
          type="number"
          id="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          min="1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="provider" className="block text-sm font-medium text-gray-700">
          Pilih Provider
        </label>
        <select
          id="provider"
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          {emailDomains.map((domain) => (
            <option key={domain} value={domain}>
              {domain}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="baseName" className="block text-sm font-medium text-gray-700">
          Nama Dasar
        </label>
        <input
          type="text"
          id="baseName"
          value={baseName}
          onChange={(e) => setBaseName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={generateEmails}
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? 'Generating...' : 'Generate Emails'}
        </button>
      </div>
      <div className="mb-4">
        <button
          onClick={clearEmails}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          Clear Emails
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {emails.map((email, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-lg text-center"
          >
            {email}
          </div>
        ))}
      </div>
    </div>
  );
}
