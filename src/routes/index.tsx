import { Routes, Route } from 'react-router-dom';
import CanvasLayout from '../layouts/CanvasLayout';
import DataCanvas from '../pages/DataCanvas';

const IndexRoutes = () => (
  <Routes>
    <Route path="" element={<CanvasLayout />} />
    <Route path="/canvas-layout" element={<CanvasLayout />}>
      <Route index element={<DataCanvas />} />
      <Route path="data-canvas" element={<DataCanvas />} />
      <Route path="data-canvas" element={<DataCanvas />} />
    </Route>
  </Routes>
);
export default IndexRoutes;
