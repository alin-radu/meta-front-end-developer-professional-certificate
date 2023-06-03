import { Routes, Route } from 'react-router-dom';

import { ROUTES } from 'utilities/routes';

import { MainLayout } from './layout/MainLayout/MainLayout';

import { HomePage } from 'pages/HomePage/HomePage';
import { BookingPage } from 'pages/BookingPage/BookingPage';

export const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path={ROUTES.MAIN_HOME_ROUTE} element={<HomePage />} />
        <Route path={ROUTES.MAIN_BOOKINGS_ROUTE} element={<BookingPage />} />
      </Routes>
    </MainLayout>
  );
};
