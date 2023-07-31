import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { defaultAvailableTimes } from 'utils/helpers';
import { ROUTES } from 'utils/routes';

import { MainLayout } from './layout/MainLayout/MainLayout';

import { HomePage } from 'pages/HomePage/HomePage';
import { BookingPage } from 'pages/BookingPage/BookingPage';
import { BookingReservationPage } from 'pages/BookingReservationPage/BookingReservationPage';
import { UnderConstructionPage } from 'pages/UnderConstructionPage/UnderConstructionPage';

export const AppRoutes = () => {
  const [availableTimes, setAvailableTimes] = useState({ ...defaultAvailableTimes });

  return (
    <MainLayout>
      <Routes>
        <Route path={ROUTES.MAIN_HOME_ROUTE} element={<HomePage />} />
        <Route path={ROUTES.MAIN_ABOUT} element={<BookingReservationPage />} />
        <Route path={ROUTES.MAIN_MENU} element={<UnderConstructionPage />} />
        <Route
          path={ROUTES.MAIN_BOOKING}
          element={
            <BookingPage
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
            />
          }
        />
        <Route path={ROUTES.MAIN_ORDER_ONLINE} element={<UnderConstructionPage />} />
        <Route path={ROUTES.MAIN_LOGIN} element={<UnderConstructionPage />} />
      </Routes>
    </MainLayout>
  );
};
