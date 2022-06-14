import { Routes, Route } from 'react-router-dom'
import RouteLogin from '../layouts/RouteLogin';
import Login from '../../src/pages/Login';
import RecoveryPassword from '../../src/pages/RecoveryPassword';
const IndexRoutes = () => (
<Routes>
<Route  path='' element={<RouteLogin/>} />
<Route  path='/route-login' element={<RouteLogin/>} >
<Route index  element={<Login/>} />
<Route  path='login' element={<Login/>} />
<Route  path='login' element={<Login/>} />
</Route>
<Route  path='recovery-password' element={<RecoveryPassword/>} />
</Routes>
);
export default IndexRoutes;
