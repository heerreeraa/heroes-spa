import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { Navbar } from '../ui';
import { HeroesRoutes } from '../heroes/router/HeroesRoutes';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="/*" element={<HeroesRoutes />} />
        </Routes>
    </>
  )
}
