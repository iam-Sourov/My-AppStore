import { createBrowserRouter } from "react-router";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/AllApps";
import Installation from "../Pages/Installation/Installation";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
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
                path: '/installation',
                Component: Installation,
            },
        ]
    },
]);
export default router ;