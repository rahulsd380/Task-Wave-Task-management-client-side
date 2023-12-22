import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import DashboardLayout from './Components/Dashboard/DashboardLayout';
import AddProduct from './Components/Dashboard/Pages/AddProduct';
import AllTasks from './Components/Dashboard/Pages/AllTasks';
import Todo from './Components/Dashboard/Pages/Todo';
import Completed from './Components/Dashboard/Pages/Completed';
import Ongoing from './Components/Dashboard/Pages/Ongoing';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Calender from './Components/Dashboard/Pages/Calender';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AboutUs from './Components/AboutUs/AboutUs';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>
      },
    ]
  },


  {
    path: "dashboard",
    element:<PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
       {
        path: "addTask",
        element: <AddProduct></AddProduct>
      },
      {
        path: "allTasks",
        element: <AllTasks></AllTasks>
      },
      {
        path: "todo",
        element: <Todo></Todo>
      },
      {
        path: "completed",
        element: <Completed></Completed>
      },
      {
        path: "ongoing",
        element: <Ongoing></Ongoing>
      },
      {
        path: "calender",
        element: <Calender></Calender>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
    </DndProvider>
    
  </React.StrictMode>,
)
