import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import Dashboard from "../pages/Dashboard";
import CsvUpload from "../pages/CsvUpload";
import ErrorPage from "../pages/ErrorPage";
import Chats from "../pages/Chats";
import SentMessage from  "../pages/sentMessages"
import {io} from "socket.io-client"
 
const socket = io("https://shravankumar.in")
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
          path: "/sent-messages",
          element: <SentMessage socket ={socket}/>,
        },
        {
          path: "/chats",
          element: <Chats />,
        },
        {
          path: "/csv-upload",
          element: <CsvUpload />,
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
