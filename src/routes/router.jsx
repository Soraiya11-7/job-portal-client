import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Register from "../pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";

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
          
        //   {
        //     path: "/brands",
        //     element: <Brands></Brands>,
        //     loader: () => fetch('/brands.json'),
        //   },
          
        //   {
        //     path: "/about-dev",
        //     element: <AboutDev></AboutDev>,
        //   },
        //   {
        //     path: "/my-profile",
        //     element: <SecretRoutes><MyProfile></MyProfile></SecretRoutes> ,
        //   },
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