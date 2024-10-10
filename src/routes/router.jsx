import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Booking from "../pages/Booking";
import SummaryBooking from "../pages/SummaryBooking";
import Traveler from "../pages/Traveler";

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
  {
    path: "/booking/traveler",
    element: <Traveler />,
  },
  { path: "*", element: <NotFound /> },
]);
