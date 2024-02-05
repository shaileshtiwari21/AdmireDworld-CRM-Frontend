import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import Dashboard from "../pages/Dashboard";
import AllQuery from "../pages/Query/AllQuery";
import ErrorPage from "../pages/ErrorPage";

function Router() {
  const routes = [
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
