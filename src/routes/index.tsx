import { Routes, Route } from 'react-router-dom'
import LandingPage from '../layouts/LandingPage';
import OrdensdeProducao from '../../src/pages/OrdensdeProducao';
import DetalhesOrdemdeProducao from '../../src/pages/DetalhesOrdemdeProducao';
const IndexRoutes = () => (
<Routes>
<Route  path='' element={<LandingPage/>} />
<Route  path='/landing-page' element={<LandingPage/>} >
<Route index  element={<OrdensdeProducao/>} />
<Route  path='ordensde-producao' element={<OrdensdeProducao/>} />
<Route  path='detalhes-ordemde-producao' element={<DetalhesOrdemdeProducao/>} />
</Route>
</Routes>
);
export default IndexRoutes;
