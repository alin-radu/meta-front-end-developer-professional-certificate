import { Routes, Route } from 'react-router-dom';

import { ROUTES } from 'utils/routes';

import { MainLayout } from './layout/MainLayout/MainLayout';
import { HomePage } from 'pages/HomePage/HomePage';
import { BookingPage } from 'pages/BookingPage/BookingPage';
import { BookingConfirmationPage } from 'pages/BookingConfirmationPage/BookingConfirmationPage';
import { UnderConstructionPage } from 'pages/UnderConstructionPage/UnderConstructionPage';

export const AppRoutes = () => (
  <MainLayout>
    <Routes>
      <Route path={ROUTES.MAIN_HOME_ROUTE} element={<HomePage />} />
      <Route path={ROUTES.MAIN_ABOUT} element={<UnderConstructionPage />} />
      <Route path={ROUTES.MAIN_MENU} element={<UnderConstructionPage />} />
      <Route path={ROUTES.MAIN_BOOKING} element={<BookingPage />} />
      <Route path={ROUTES.MAIN_ORDER_ONLINE} element={<UnderConstructionPage />} />
      <Route path={ROUTES.MAIN_LOGIN} element={<UnderConstructionPage />} />
      <Route
        path={ROUTES.MAIN_BOOKING_CONFIRMATION}
        element={<BookingConfirmationPage />}
      />
    </Routes>
  </MainLayout>
);
