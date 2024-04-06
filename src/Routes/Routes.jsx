import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Shared/Layout/Layout";
import Home from "../components/Home/Home";
import About from './../components/About/About';
import Career from "../components/Career/Career";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import NewsDetails from "../components/News/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element : <Layout></Layout>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/carrer',
                element: <Career></Career>
            },
            {
                path : '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element : <Register></Register>
            },
        ]
    }
]);

export default router;