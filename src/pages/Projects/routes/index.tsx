import { Navigate, Route, Routes } from 'react-router-dom';
import ErrorPage from '../../../components/ErrorPage';
import { ProjectDetails } from '../pages/ProjectDetails';
import { ProjectList } from '../pages/ProjectList';
import { ProjectSettings } from '../pages/ProjectSettings';

export const ProjectRoutes = () => (
  <Routes>
    <Route index element={<Navigate to="list" />} />
    <Route path="list" element={<ProjectList />} />
    <Route path=":id" element={<ProjectDetails />} />
    <Route path=":id/settings" element={<ProjectSettings />} />
    <Route path="*" element={ <ErrorPage />} />
  </Routes>
);

export default ProjectRoutes;
