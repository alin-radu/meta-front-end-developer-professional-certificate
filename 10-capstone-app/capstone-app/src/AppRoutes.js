import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { defaultAvailableTimes } from 'utils/helpers';
import { ROUTES } from 'utils/routes';

import { MainLayout } from './layout/MainLayout/MainLayout';

import { HomePage } from 'pages/HomePage/HomePage';
import { BookingPage } from 'pages/BookingPage/BookingPage';

export const AppRoutes = () => {
  const [availableTimes, setAvailableTimes] = useState({ ...defaultAvailableTimes });

  return (
    <MainLayout>
      <Routes>
        <Route path={ROUTES.MAIN_HOME_ROUTE} element={<HomePage />} />
        <Route
          path={ROUTES.MAIN_BOOKING_ROUTE}
          element={
            <BookingPage
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
            />
          }
        />
      </Routes>
    </MainLayout>
  );
};
