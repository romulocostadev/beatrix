import React from 'react' 
import { Routes, Route } from 'react-router-dom'
import Suspense from './components/Suspense' 
import * as CONSTANTS from  './constants' 
const Home = React.lazy(() => import('../../src/pages/Home'));
const Login = React.lazy(() => import('../../src/pages/Login'));
const Welcome = React.lazy(() => import('../../src/pages/Welcome'));
const IndexRoutes = () => (
<Routes>
<Route  path='' element={
                    <Suspense>
                        <Home/>
                    </Suspense>
                    } />
<Route  path={CONSTANTS.HOME} element={
                    <Suspense>
                        <Home/>
                    </Suspense>
                    } />
<Route  path={CONSTANTS.LOGIN} element={
                    <Suspense>
                        <Login/>
                    </Suspense>
                    } />
<Route  path={CONSTANTS.WELCOME} element={
                    <Suspense>
                        <Welcome/>
                    </Suspense>
                    } />
</Routes>
);
export default IndexRoutes;
