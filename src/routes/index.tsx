import { Routes, Route } from 'react-router-dom'
import Home from '../layouts/Home';
import HomeContent from '../../src/pages/HomeContent';
import Application from '../layouts/Application';
import ApplicationContent from '../../src/pages/ApplicationContent';
const IndexRoutes = () => (
<Routes>
<Route  path='' element={<Home/>} />
<Route  path='/home' element={<Home/>} >
<Route index  element={<HomeContent/>} />
<Route  path='home-content' element={<HomeContent/>} />
</Route>
<Route  path='/application' element={<Application/>} >
<Route index  element={<ApplicationContent/>} />
<Route  path='application-content' element={<ApplicationContent/>} />
</Route>
</Routes>
);
export default IndexRoutes;
