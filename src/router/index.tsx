import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import Dashboard from "../pages/Dashboard";
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
