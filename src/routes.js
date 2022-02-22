import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";

import { Component } from "react";
import { ADMIN_ROUTE, BASKET_ROUTE } from "./utils/consts";
import { SHOP_ROUTE } from "./utils/consts";
import { LOGIN_ROUTE } from "./utils/consts";
import { REGISTRATION_ROUTE } from "./utils/consts";
import { DEVICE_ROUTE } from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },

  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },

  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },

  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },

  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage,
  },
];
