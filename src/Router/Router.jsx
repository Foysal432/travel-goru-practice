import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Pages/Login";
import News from "../Pages/News";
import Register from "../Pages/Register";
import Blog from "../Pages/Blog";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter ([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            
            {
                path:'/',
                element:<News></News>
            },
            
            {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/blog',
            loader:()=>fetch('/data.json'),
            element:<PrivateRoute><Blog></Blog></PrivateRoute>
        }
      
    ]
    }

])