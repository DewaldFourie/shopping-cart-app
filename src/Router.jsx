import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Base from "./Base";


const Router = () => {



    const router = createBrowserRouter([
        {
            path: "/",
            element: <Base />,
            errorElement: <ErrorPage />,
            children: [
                { path: "home", element: <Home />},
                { path: "shop", element: <Shop />},
                { path: "contact", element: <Contact />},
            ],
        },
    ]);

    return <RouterProvider router={router} />
};

export default Router;