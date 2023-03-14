import { Navigate, Route, Routes } from 'react-router-dom';
import { Analysis } from '../pages/Analysis';
import { Dashboard } from '../pages/Dashboard';
import { Monitor } from '../pages/Monitor';
import { Workplace } from '../pages/Workplace';

export const DashboardRoutes = () => (
  <Routes>
    <Route index element={<Dashboard />} />
    <Route path="analysis" element={<Analysis />} />
    <Route path="monitor" element={<Monitor />} />
    <Route path="workplace" element={<Workplace />} />
    <Route path="*" element={<Navigate to="analysis" />} />
  </Routes>
);

export default DashboardRoutes;
