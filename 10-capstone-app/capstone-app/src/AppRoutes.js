import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getFormatedDate } from 'utilities/helpers';
import { ROUTES } from 'utilities/routes';

import { TIME_OPTIONS } from 'pages/utils/constants';

import { MainLayout } from './layout/MainLayout/MainLayout';

import { HomePage } from 'pages/HomePage/HomePage';
import { BookingPage } from 'pages/BookingPage/BookingPage';

const currentDate = getFormatedDate(new Date());

export const AppRoutes = () => {
  const [availableTimes, setAvailableTimes] = useState({ [currentDate]: TIME_OPTIONS });

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
