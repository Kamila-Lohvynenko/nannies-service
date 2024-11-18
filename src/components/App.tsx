import './App.css';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NanniesPage = lazy(() => import('../pages/NanniesPage/NanniesPage'));
const FavoritesPage = lazy(
  () => import('../pages/FavoritesPage/FavoritesPage'),
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nannies" element={<NanniesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
