import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Event from "../Pages/Events/Event";
import ErrorPage from "./ErrorPage";
import About from "../Pages/Contact/About";
import Blog from "../Pages/Blog/Blog"; 
import FeaturedCardDetails from "../Pages/Blog/FeaturedCardDetails";
import Enroll from "../Pages/Enroll/Enroll";
import Register from "@/Pages/Register";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AdminDash from "@/Pages/admin/AdminDash";
import ManageUsers from "@/Pages/admin/ManageUsers";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import UserDash from "@/Pages/User/UserDash";
import Login from "@/Pages/Login";
import App from "@/App";
const routes = createBrowserRouter([
  {
    path: "/",
    // element: <Root></Root>,
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/events",
        element: <Event></Event>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/contact",
        element: <About></About>,
      },
      {
        path: "/blog/:id", 
        element: <FeaturedCardDetails></FeaturedCardDetails>,
      },
      {
        path: "/enroll", 
        element: <Enroll></Enroll>
      },
       {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  }
      
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dash",
        element: <AdminDash />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      }
    ],
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dash",
        element: <UserDash />,
      },
    ],
  },
 
]);
export default routes;
