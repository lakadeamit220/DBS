// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        DBS – Pune Region
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Division Budget Software – Development in progress
      </p>
      <div className="space-x-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Go to Login (coming soon)
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future routes: /login, /dashboard, etc. */}
      </Routes>
    </Router>
  );
}

export default App;