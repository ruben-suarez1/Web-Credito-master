// Layouts
import LayoutBasic from "../layouts/LayoutBasic";
import LayoutUser from "../layouts/LayoutUser";
//Pages
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";

//Other
import Error404 from "../pages/Error404";
import { getAccessTokenApi } from "../api/auth";


const routes = [
  {
    path: "/user",
    component: LayoutUser,
    exact: false,
    routes: [
      {
        path: "/user",
        component: Home,
        exact: true,
      },
    ],
  },
  {
    path: "/",
    component: getAccessTokenApi() ? LayoutUser : LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/login",
        component: Login,
        exact: true,
      },
      {
        path: "/register",
        component: Register,
        exact: true,
      },
      {
        path: "/perfil",
        component: Profile,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];
export default routes;
