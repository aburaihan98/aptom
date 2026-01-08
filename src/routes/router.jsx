import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../app/errorPage/ErrorPage";
import SaaS from "../app/saas/SaaS";
import AppPage from "../app/app/App";
import AboutUs from "../app/about_us/AboutUs";
import CaseStudy from "../app/case_study/CaseStudy";
import Team from "../app/team/Team";
import PricingPlan from "../app/pricing_plan/PricingPlan";
import OurServices from "../app/our_services/OurServices";
import FAQ from "../app/FAQ/FAQ";
import BlogWithSidebar from "../app/blog/BlogWithSidebar";
import BlogDetails from "../app/blog/BlogDetails";
import Contact from "../app/contact/Contact";
import Login from "../app/login/Login";
import Register from "../app/register/Register";
import ServiceDetails from "../app/our_services/ServiceDetails";
import CaseStudyDetails from "../app/case_study/CaseStudyDetails";
import Review from "../app/review/Review";
import BlogPage from "../app/blog/BlogPage";

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
      {
        path: "/case-study/case-study-details",
        element: <CaseStudyDetails />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/pricing-plan",
        element: <PricingPlan />,
      },
      {
        path: "/our-services",
        element: <OurServices />,
      },
      {
        path: "/our-services/service-details",
        element: <ServiceDetails />,
      },
      {
        path: "/review",
        element: <Review />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog-with-sidebar",
        element: <BlogWithSidebar />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
