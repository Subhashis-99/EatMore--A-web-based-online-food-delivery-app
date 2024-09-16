import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Header } from "./src/components/Header";
import { Home } from "./src/components/Home";
import { LazyShimmer } from "./src/components/Shimmer";
import ScrollToTop from "./src/components/ScrollToTop";
import React, { lazy, Suspense, useState, useEffect } from "react";
import { Coordinates } from "./src/utils/userContext";
import { Toaster } from "react-hot-toast";
import DialogflowMessenger from "./src/components/DialogflowMessenger";
import SmoothScrolling from "./src/components/SmoothScrolling";

// Redux
import { Provider } from "react-redux";
import store from "./src/utils/store";

const QuickBasket = lazy(() => import("./src/components/QuickBasket"));
const Search = lazy(() => import("./src/components/Search"));
const Info = lazy(() => import("./src/components/Info"));
const AboutSection = lazy(() => import("./src/components/AboutSection"));
const ContactSection = lazy(() => import("./src/components/ContactSection"));
const ServicesSection = lazy(() => import("./src/components/ServicesSection"));
const Error = lazy(() => import("./src/components/Error"));
const RestaurantMenu = lazy(() => import("./src/components/RestaurantMenu"));
const Cart = lazy(() => import("./src/components/Cart"));
const SignInOut = lazy(() => import("./src/components/SignInOut"));
const FAQ = lazy(() => import("./src/components/FAQ"));



const AppLayout = () => {
  const [coordinate, setCoordinate] = useState(() => {
    const savedLocation = localStorage.getItem("savedLocation");
    return savedLocation
      ? JSON.parse(savedLocation)
      : { lat: null, lng: null, address: "" };
  });

  useEffect(() => {
    if (coordinate.lat && coordinate.lng) {
      localStorage.setItem("savedLocation", JSON.stringify(coordinate));
    }
  }, [coordinate]);

  return (
    <Provider store={store}>
      <Coordinates.Provider value={{ coordinate, setCoordinate }}>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Toaster />
        <DialogflowMessenger />
      </Coordinates.Provider>
    </Provider>
  );
};

export default AppLayout;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <SmoothScrolling>
        <AppLayout />
      </SmoothScrolling>
    ),
    errorElement: (
      <Suspense fallback={<LazyShimmer />}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/info",
        element: (
          <Suspense fallback={<LazyShimmer />}>
            <Info />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element: <Navigate to="about" />,
          },
          {
            path: "about",
            element: (
              <Suspense fallback={<LazyShimmer />}>
                <AboutSection />
              </Suspense>
            ),
          },
          {
            path: "contact",
            element: (
              <Suspense fallback={<LazyShimmer />}>
                <ContactSection />
              </Suspense>
            ),
          },
          {
            path: "services",
            element: (
              <Suspense fallback={<LazyShimmer />}>
                <ServicesSection />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/restaurant/:Resid",
        element: (
          <Suspense fallback={<LazyShimmer />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/quickBasket",
        element: (
          <Suspense fallback={<LazyShimmer />}>
            <QuickBasket />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<LazyShimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/signIn",
        element: (
          <Suspense fallback={<LazyShimmer />}>
            <SignInOut />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<LazyShimmer />}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/faq",
        element: (
          <Suspense fallback={<LazyShimmer />}>
            <FAQ />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
