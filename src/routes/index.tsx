import { Routes, Route } from 'react-router-dom';
import Home from '../layouts/Home';
import HomeContent from '../pages/HomeContent';

const IndexRoutes = () => (
  <Routes>
    <Route path="" element={<Home />} />
    <Route path="/home" element={<Home />}>
      <Route index element={<HomeContent />} />
      <Route path="home-content" element={<HomeContent />} />
    </Route>
  </Routes>
);
export default IndexRoutes;
