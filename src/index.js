import React from "react";
import ReactDOM from "react-dom/client";
import {Title} from "./components/HeaderComponent";
import HeaderComponent from "./components/HeaderComponent";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import UserMyProfile from "./components/UserMyProfile";

// const Body = () =>
// {
//  return (<RestaurantCard /> );
// }

const AppComponent = () => {
    return ( 
    <>
   { <HeaderComponent /> }
    {<Outlet /> }
    {/* {<Body />} */}
   { <Footer /> }
   </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent />,
        errorElement: <Error/>,
        children: [
            {
                path : '/',
                element: <Body />
    
                }  ,
            {
            path : '/userprofile/:resId',
            element: <UserMyProfile />,
            errorElement: <Error/>

            }          
        ]
        
    }
]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppComponent />);
root.render(<RouterProvider router={appRouter}></RouterProvider>)

//export default AppComponent;


