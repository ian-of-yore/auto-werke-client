import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import SignIn from "../../pages/Authentication/SignIn/SignIn";
import Register from "../../pages/Authentication/Register/Register";
import Home from "../../pages/HomePage/Home/Home";
import Checkout from "../../pages/Checkout/Checkout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>
            }

        ]
    }
])