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
import AddStore from './features/AddStore/AddStore';
import AddManger from './Pages/Admin/AddManger/AddManger';
import ManagerM from './Pages/Admin/ManagerM/ManagerM';


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
            path: "/salesRep/stocks",
            element: <Stocks user ="salesRep"/>,            
          },
          {
            path: "/salesRep/delivery",
            element: <Delivery/>,            
          },
          {
            path: "/salesRep/orders",
            element: <Orders user="salesRep"/>,           
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
            path: "/salesRep/shops",
            element: <Shops user ="salesRep"/>,            
          },

        ],
      },
      {
        path: "/manager",
        element: <DashboardM user="manager"/>,
        
        children: [
          {
            path: "/manager/dashboard",
            element: <HomeM/>,            
          },
          {
            path:"/manager/manageSalesRep",
            element:<SalesRepM user ="manager"/>
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
            element:<Stocks user ="manager"/>
          },
          {
            path:"/manager/shops",
            element:<Shops user ="manager"/>
          },
          {
            path:"/manager/addStore",
            element:<AddStore/>
          },
          {
            path:"/manager/orders",
            element:<Orders user="manager"/>
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
        element: <DashboardM user="admin"/>,
        
        children: [
          {
            path: "/admin/dashboard",
            element: <HomeM/>,            
          },
          {
            path:"/admin/manageSalesRep",
            element:<SalesRepM user ="admin"/>
          },          
          {
            path:"/admin/addSalesRep",
            element:<AddSalesRep/>
          },
          {
            path:"/admin/managers",
            element:<ManagerM/>
          },          
          {
            path:"/admin/addManager",
            element:<AddManger/>
          },
          {
            path:"/admin/manageSales",
            element:<Sales/>
          },
          {
            path:"/admin/addStore",
            element:<AddStore/>
          },
          {
            path: "/admin/profile",
            element: <Profile/>,            
          },
          {
            path:"/admin/stocks",
            element:<Stocks user ="admin"/>
          },
          {
            path:"/admin/shops",
            element:<Shops user ="admin"/>
          },
          {
            path:"/admin/orders",
            element:<Orders user ="admin"/>
          },          
          {
            path: "/admin/order-placement",
            element: <OrderPlacement/>,           
          },
          {
            path:"/admin/addBatch",
            element:<AddBatch/>
          }

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


