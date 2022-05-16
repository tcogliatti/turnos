// Layuts

import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";
import LayoutClient from "../layouts/LayoutClient";
import LayoutUser from "../layouts/LayoutUser";
import LayoutEspecial from "../layouts/LayoutEspecial";

// Admin Pages
import AdminHome from '../pages/Admin';
import AdminSignIn from "../pages/Admin/Signin";

// User pages
import Home from "../pages/Home";
import Contact from "../pages/Contact" ;
import UserHome from "../pages/client/Home";

// Client pages
import ClientHome from "../pages/client/Home";
import ClientPanel from "../pages/client/Panel";

// others
import Error404 from "../pages/Error404";

// routes Admin
const routesAdmin = [
    {
        path: '/admin/',
        layout: LayoutAdmin,
        component: AdminHome,
    },
    {
        path: '/admin/login',
        layout: LayoutAdmin,
        component: AdminSignIn ,
    }
];

// routes Client
const routesClient = [
    {
        path:'/client',
        layout: LayoutClient,
        component: ClientHome,
    }
];

// routes User
const routesUser = [
    {
        path: '/',
        layout: LayoutBasic,
        component: Home,
    },
    {
        path: '/contact',
        layout: LayoutBasic,
        component: Contact,
    }
];

// routes total
const routes = [
  ...routesAdmin,
  ...routesUser,
  ...routesClient,
  {
    path:"*",
    layout: LayoutEspecial,
    component: Error404
  }
];

export default routes;