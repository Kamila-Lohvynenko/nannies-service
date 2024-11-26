import styles from './App.module.scss';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Layout from './Layout/Layout';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NanniesPage = lazy(() => import('../pages/NanniesPage/NanniesPage'));
const FavoritesPage = lazy(
  () => import('../pages/FavoritesPage/FavoritesPage'),
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Header />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nannies" element={<NanniesPage />} />
            <Route
              path="/favorites"
              element={
                <PrivateRoute
                  component={<FavoritesPage />}
                  redirectTo="/nannies"
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
      <Toaster position="top-right" />
    </Layout>
  );
}

export default App;
