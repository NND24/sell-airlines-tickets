import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Booking from "../pages/Booking";
import SummaryBooking from "../pages/SummaryBooking";
import Traveler from "../pages/Traveler";
import Seat from "../pages/Seat";
import Payment from "../pages/Payment";

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
  {
    path: "/booking/seat",
    element: <Seat />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  { path: "*", element: <NotFound /> },
]);
