import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/SalesRep/Home/Home';
import Login from './features/login/Login';
import Dashboard from './Pages/SalesRep/Dashboard/Dashboard';
import Delivery from './Pages/SalesRep/Delivery/Delivery';
import OrderPlacement from './Pages/SalesRep/OrderPlacement/OrderPlacement';
import Profile from './Pages/Profile/Profile';
import Orders from './features/Orders/Orders';
import Shops from './features/Shops/Shops';
import DashboardM from './Pages/Manager/Dashboard/DashboardM';
import HomeM from './Pages/Manager/HomeM/HomeM';
import SalesRepM from './features/SalesRepM/SalesRepM';
import Stocks from './features/Stocks/Stocks';
import Sales from './features/Sales/Sales';
import AddSalesRep from './features/AddSalesRep/AddSalesRep';
import AddBatch from './features/AddBatch/AddBatch';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/salesRep",
        element: <Dashboard />,
        
        children: [
          {
            path: "/salesRep/dashboard",
            element: <Home/>,            
          },
          {
            path: "/salesRep/delivery",
            element: <Delivery/>,            
          },
          {
            path: "/salesRep/orders",
            element: <Orders/>,           
          },
          {
            path: "/salesRep/order-placement",
            element: <OrderPlacement/>,           
          },
          {
            path: "/salesRep/profile",
            element: <Profile/>,            
          },
          {
            path: "/salesRep/stocks",
            element: <Stocks/>,            
          },
          {
            path: "/salesRep/shops",
            element: <Shops/>,            
          },

        ],
      },
      {
        path: "/manager",
        element: <DashboardM/>,
        
        children: [
          {
            path: "/manager/dashboard",
            element: <HomeM/>,            
          },
          {
            path:"/manager/manageSalesRep",
            element:<SalesRepM/>
          },
          {
            path:"/manager/manageSales",
            element:<Sales/>
          },
          {
            path: "/manager/profile",
            element: <Profile/>,            
          },
          {
            path:"/manager/addSalesRep",
            element:<AddSalesRep/>
          },
          {
            path:"/manager/stocks",
            element:<Stocks/>
          },
          {
            path:"/manager/shops",
            element:<Shops/>
          },
          {
            path:"/manager/orders",
            element:<Orders/>
          },
          
          {
            path: "/manager/order-placement",
            element: <OrderPlacement/>,           
          },
          {
            path:"/manager/addBatch",
            element:<AddBatch/>
          }

        ],
      },
      {
        path: "/admin",
        element: <Dashboard/>,
        
        children: [
          {
            path: "/admin/dashboard",
            element: <HomeM/>,            
          },
          {
            path:"/admin/manageUsers",
            element:<SalesRepM/>
          },
          {
            path:"/admin/manageStores",
            element:<Sales/>
          },
          {
            path: "/admin/profile",
            element: <Profile/>,            
          },

        ],
      },
    
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


