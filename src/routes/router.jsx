import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Register from "../pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SecretRoutes from "./SecretRoutes";
// import MyProfile from "../pages/MyProfile";
import ApplyJob from "../pages/ApplyJob";
import MyProfile from "../pages/MyProfile";

const router = createBrowserRouter([
    {
        path: "/",
        // errorElement: <ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
            // loader: () => fetch('../brands.json'),
          },
          {
            path: "/my-profile",
            element:  <SecretRoutes><MyProfile></MyProfile></SecretRoutes> ,
          //   // loader: ({params}) => fetch(`https://assignment-10-server-gamma-mocha.vercel.app/review/${params.id}`),
          },
          {
            path: "/apply/:id",
            element:  <SecretRoutes><ApplyJob></ApplyJob></SecretRoutes> ,
            // loader: ({params}) => fetch(`https://assignment-10-server-gamma-mocha.vercel.app/review/${params.id}`),
          },
          
      
        //   {
        //     path: "/brand/:id",
        //     element: <SecretRoutes><Coupon></Coupon></SecretRoutes>,
        //     loader:async({params}) => {
        //       const res = await fetch("/brands.json")
        //       const data = await res.json()
        //       const singleData = data.find((d) => d._id == params.id)
        //       return singleData
        //     },
        //   },
         
          {
            path: "auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>,
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>,
                },
              
            ],
        },
    
        ],
      },
      
    ],
      {
        future: {
          v7_normalizeFormMethod: true,
          v7_fetcherPersist: true,
          v7_partialHydration: true,
          v7_relativeSplatPath: true,
          v7_skipActionStatusRevalidation: true
        },
      });

  export default router;