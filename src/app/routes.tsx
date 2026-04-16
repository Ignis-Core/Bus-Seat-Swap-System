import { createBrowserRouter, Navigate } from "react-router";
import { AuthPage } from "./pages/AuthPage";
import { Root } from "./pages/Root";
import { HomePage } from "./pages/HomePage";
import { SellTicketPage } from "./pages/SellTicketPage";
import { BuyTicketPage } from "./pages/BuyTicketPage";
import { ProfilePage } from "./pages/ProfilePage";
import { MyActivityPage } from "./pages/MyActivityPage";
import { PaymentPage } from "./pages/PaymentPage";
import { TermsPage } from "./pages/TermsPage";
import { AboutPage } from "./pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth" replace />,
  },
  {
    path: "/auth",
    Component: AuthPage,
  },
  {
    path: "/home",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "sell", Component: SellTicketPage },
      { path: "buy", Component: BuyTicketPage },
      { path: "profile", Component: ProfilePage },
      { path: "activity", Component: MyActivityPage },
      { path: "payment", Component: PaymentPage },
      { path: "terms", Component: TermsPage },
      { path: "about", Component: AboutPage },
    ],
  },
]);
