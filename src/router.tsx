import { createBrowserRouter, Outlet } from "react-router-dom";
import BrowseView from "./BroweView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet></Outlet>,
        children: [
            {
                path: "/browse/*",
                element: <BrowseView></BrowseView>
            }
        ]
    }
])

export default router