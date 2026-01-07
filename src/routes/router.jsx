import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../app/errorPage/ErrorPage";
import SaaS from "../app/saas/SaaS";
import AppPage from "../app/app/App";
import AboutUs from "../app/about_us/AboutUs";
import CaseStudy from "../app/case_study/CaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <SaaS />,
      },
      {
        path: "/app",
        element: <AppPage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/case-study",
        element: <CaseStudy />,
      },
    ],
  },
]);
