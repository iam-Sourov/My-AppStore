import { createBrowserRouter } from "react-router";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/AllApps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Error404 from "../Pages/Error/PageError/Error404";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <Error404></Error404>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/apps',
                Component: Apps,
            },
            {
                path: '/appDetails/:id',
                Component: AppDetails,
            },
            {
                path: '/installation',
                Component: Installation,
            },
            {
                path: "*",
                Component: Error404,
            },
        ],
    },

]);
export default router;