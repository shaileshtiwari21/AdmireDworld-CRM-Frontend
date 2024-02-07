import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import Dashboard from "../pages/Dashboard";
import AllQuery from "../pages/Query/AllQuery";
import ErrorPage from "../pages/ErrorPage";
import AddQuery from "../pages/Query/Add-Query";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Router() {
  const routes = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/all-query",
          element: <AllQuery />,
        },
        {
          path: "/add-query",
          element: <AddQuery />,
        },

        {
          path: "/error-page",
          element: <ErrorPage />,
        },

        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ];

  return useRoutes(routes);
}

export default Router;
