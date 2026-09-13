import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter
      basename={
        window.location.pathname.split('/')[1] ? '/' + window.location.pathname.split('/')[1] : '/'
      }
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

// Updated per review: Fix syntax and lint issues (ESLint/Prettier) so this file parses cleanly.

// Updated per review: Fix syntax and lint issues (ESLint/Prettier) so this file parses cleanly.

// Updated per review: Fix syntax and lint issues (ESLint/Prettier) so this file parses cleanly.
