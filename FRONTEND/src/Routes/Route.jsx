import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Event from "../Pages/Events/Event";
import ErrorPage from "./ErrorPage";
import About from "../Pages/Contact/About";
import SingleBlogPage from "../Pages/Blog/SingleBlogPage";
import Blog from "../Pages/Blog/Blog"; 

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        path: "/single-blog",
        element: <SingleBlogPage></SingleBlogPage>
      },
    ],
  },
]);
export default routes;
