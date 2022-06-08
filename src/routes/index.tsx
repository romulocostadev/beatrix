import { Routes, Route } from 'react-router-dom';
import Home from '../layouts/Home';
import HomeContent from '../pages/HomeContent';
import ApplicationContent from '../pages/ApplicationContent';
import Application from '../layouts/Application';

const IndexRoutes = () => (
  <Routes>
    <Route path="" element={<Home />} />
    <Route path="/home" element={<Home />}>
      <Route index element={<HomeContent />} />
      <Route path="home-content" element={<HomeContent />} />
      <Route path="application-content" element={<ApplicationContent />} />
    </Route>
    <Route path="application" element={<Application />} />
  </Routes>
);
export default IndexRoutes;
