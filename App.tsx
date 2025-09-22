
import React from 'react';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="p-8 text-gray-900">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        <p className="mt-4">This is where the rest of the application's content would go.</p>
      </main>
    </div>
  );
};

export default App;
