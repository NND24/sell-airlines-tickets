import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Booking from "../pages/Booking";
import SummaryBooking from "../pages/SummaryBooking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/booking/shopping-cart",
    element: <SummaryBooking />,
  },
  { path: "*", element: <NotFound /> },
]);
