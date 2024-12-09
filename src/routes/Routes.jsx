import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import AllBrands from "../component/AllBrands";
import BrandDetails from "../component/BrandDetails";
import ErrorPage from "../component/ErrorPage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../component/Login";
import Register from "../component/Register";
import MyProfile from "../component/MyProfile";
import ForgotPassword from "../component/ForgotPassword";
import Update from "../component/Update";
import PrivateRoute from "../component/PrivateRoute";

const router = createBrowserRouter([
    {
        path : '/',
        element :<Mainlayout/>,
        errorElement : <ErrorPage/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : 'brands',
                element :<AllBrands/>
            },
            {
                path : '/my_profile',
                element  :<PrivateRoute><MyProfile/></PrivateRoute>
            },
            {
                path : 'brand/:id',
                element :<PrivateRoute><BrandDetails/></PrivateRoute>
            },

        ]
    },
    {
        path : 'auth',
        element : <AuthLayout/>,
        children : [
            {
                path : '/auth/login',
                element : <Login/>
            },
            {
                path : '/auth/registration',
                element : <Register/>
            },
            {
                path : '/auth/forgot_password',
                element : <ForgotPassword/>
            },
            {
                path : '/auth/updateProfile',
                element : <Update/>
            }
        ]
    }
])

export default router