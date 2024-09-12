import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Header } from "./src/components/Header";
import { Home } from "./src/components/Home";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { LazyShimmer } from "./src/components/Shimmer";
import ScrollToTop from "./src/components/ScrollToTop";
import { userData } from "./src/utils/userContext";
import React, { lazy, Suspense, useState, useEffect } from "react";
import Cart from "./src/components/Cart";
import { Coordinates } from "./src/utils/userContext";
import { Toaster } from "react-hot-toast";
import SignInOut from "./src/components/SignInOut";

// Redux
import { Provider } from "react-redux";
import store from "./src/utils/store";

const QuickBasket = lazy(() => import("./src/components/QuickBasket"));
const Search = lazy(() => import("./src/components/Search"));
const Info = lazy(() => import("./src/components/Info"));
const AboutSection = lazy(() => import("./src/components/AboutSection"));
const ContactSection = lazy(() => import("./src/components/ContactSection"));
const ServicesSection = lazy(() => import("./src/components/ServicesSection"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Subhahsis",
    email: "spraharaj@gmail.com",
    age: 23,
    cast: "Bramhan",
  });

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
      <userData.Provider value={{ user, setUser }}>
        <Coordinates.Provider value={{ coordinate, setCoordinate }}>
          <ScrollToTop />
          <Header />
          <Outlet />
          <Toaster />
        </Coordinates.Provider>
      </userData.Provider>
    </Provider>
  );
};

export default AppLayout;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
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
        element: <RestaurantMenu />,
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
        element: <Cart />,
      },
      {
        path: "/signIn",
        element: <SignInOut />,
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<LazyShimmer />}>
            <Search />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
