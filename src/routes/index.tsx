import { Routes, Route } from 'react-router-dom';
import LayoutLayout from '../layouts/LayoutLayout';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import RecoveryPassword from '../pages/RecoveryPassword';

const IndexRoutes = () => (
  <Routes>
    <Route path="" element={<LayoutLayout />} />
    <Route path="/layout-layout" element={<LayoutLayout />}>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="create-account" element={<CreateAccount />} />
      <Route path="recovery-password" element={<RecoveryPassword />} />
    </Route>
  </Routes>
);
export default IndexRoutes;
