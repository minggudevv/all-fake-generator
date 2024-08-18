'use client';

import { useState } from 'react';
import EmailGenerator from '../components/EmailGenerator';

export default function HomePage() {
  const [currentTool, setCurrentTool] = useState('Email Generator');

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">{currentTool}</h1>
      {currentTool === 'Email Generator' && <EmailGenerator />}
      {currentTool === 'Tool 2' && <div>Tool 2 Content</div>}
      {currentTool === 'Tool 3' && <div>Tool 3 Content</div>}
    </main>
  );
}
