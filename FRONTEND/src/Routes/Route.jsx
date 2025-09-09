import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Event from "../Pages/Events/Event";
import Join from "../Pages/Join/Join";
import ErrorPage from "./ErrorPage";
import Member from "../Pages/Members/Member";
import Achievements from "../Pages/Home/Achievements";
import About from "../Pages/Contact/About";
const routes = createBrowserRouter([
	{
	  path: "/",
	  element: <Root></Root>,
	  errorElement: <ErrorPage></ErrorPage>,
	  children: [
		{
			path: "/",
			element: <Home></Home>
		},
		{
			path: "/events",
			element: <Event></Event>
		},
		{
			path: "/join",
			element: <Join></Join>
		},
		{
			path: "/members",
			element: <Member></Member>
		},
		{
			path: "/achieve",
			element: <Achievements></Achievements>
		},
		{
			path: "/contact",
			element: <About></About>
		}
	  ]
	}
  ]);
export default routes;