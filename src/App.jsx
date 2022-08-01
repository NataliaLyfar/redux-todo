import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { MainLayout } from 'layout';
import { DayLayout } from 'layout/DayLayout';


const UserPage = lazy(() => import('pages/UserPage/UserPage'));
const MyDayPage = lazy(() => import('pages/MyDayPage/MyDayPage'));
const FilterPage = lazy(() => import('pages/FilterPage/FilterPage'));

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Navigate to='user'/>} />
        <Route path='user' element={<UserPage />} />
        <Route path='filter' element={<FilterPage />} />
      </Route>
      <Route path='/' element={<DayLayout/>}>
        <Route path='myDay' element={<MyDayPage />} />
      </Route>
    </Routes>
  );
};