import AdminPanel from './pages/AdminPanel';
import Basket from './pages/Basket';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import DevicePage from './pages/DevicePage';

export const adminRoute = {
    path: '/admin',
    Component: <AdminPanel />
}

export const basketRoute = {
    path: '/basket',
    Component: <Basket />
}

export const shopRoute = {
    path: '/',
    Component: <Shop />
}

export const deviceRoute = {
    path: '/device' + '/:i',
    Component: <DevicePage />
}

export const registrationRoute = {
    path: '/registration',
    Component: <Auth />
}

export const autorizationRoute= {
    path: '/auth',
    Component: <Auth />
}


export const authRoutes = [
    adminRoute,
    basketRoute
];

export const publicRoutes = [
    shopRoute,
    deviceRoute,
    registrationRoute,
    autorizationRoute,
];


