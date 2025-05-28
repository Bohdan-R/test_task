import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Overview = lazy(() => import("../pages/Overview"));
const Users = lazy(() => import("../pages/Users"));
const Settings = lazy(() => import("../pages/Settings"));

export const routes: RouteObject[] = [
  {
    path: "/overview",
    element: <Overview />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "*",
    element: <Overview />,
  },
];
