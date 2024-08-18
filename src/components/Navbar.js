'use client';

import { useState } from 'react';

const tools = ['Email Generator', 'Tool 2', 'Tool 3']; // Tambahkan lebih banyak tools di sini

const Navbar = ({ setCurrentTool }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToolClick = (tool) => {
    setCurrentTool(tool);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">My Tools</div>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="text-white font-semibold hover:text-gray-300"
          >
            Tools
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
              {tools.map((tool) => (
                <button
                  key={tool}
                  onClick={() => handleToolClick(tool)}
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left"
                >
                  {tool}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
