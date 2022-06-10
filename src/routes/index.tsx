import { Routes, Route } from 'react-router-dom';
import Home from '../layouts/Home1';
import HomeContent from '../pages/HomeContent';
import Application from '../layouts/Application';
import ApplicationContent from '../pages/ApplicationContent';
import CanvasLayout from '../layouts/CanvasLayout';
import DataCanvas from '../pages/DataCanvas';
import DataCanvasDatabase from '../pages/DataCanvasDatabase';

const IndexRoutes = () => (
  <Routes>
    <Route path="" element={<Home />} />
    <Route path="/home" element={<Home />}>
      <Route index element={<HomeContent />} />
      <Route path="home-content" element={<HomeContent />} />
    </Route>
    <Route path="/application" element={<Application />}>
      <Route index element={<ApplicationContent />} />
      <Route path="application-content" element={<ApplicationContent />} />
    </Route>
    <Route path="/canvas-layout" element={<CanvasLayout />}>
      <Route index element={<DataCanvas />} />
      <Route path="data-canvas" element={<DataCanvas />} />
      <Route path="data-canvas-database" element={<DataCanvasDatabase />} />
    </Route>
  </Routes>
);
export default IndexRoutes;
