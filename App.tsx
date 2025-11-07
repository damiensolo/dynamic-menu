
import React, { useState } from 'react';
import Header from './components/Header';

const App: React.FC = () => {
  const [pageTitle, setPageTitle] = useState('Project Management / Project');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onSelectionChange={setPageTitle} />
      <main className="flex-grow flex items-center justify-center p-8 text-gray-900">
        <h1 className="text-4xl font-bold text-gray-300">{pageTitle}</h1>
      </main>
    </div>
  );
};

export default App;
