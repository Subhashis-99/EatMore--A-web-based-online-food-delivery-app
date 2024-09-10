import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import { Header } from "./src/components/Header";
import { Home } from "./src/components/Home";
import Info from "./src/components/Info";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { useNavigate } from "react-router-dom";
import { SearchRestaurantLoader } from "./src/components/Shimmer";
import ScrollToTop from "./src/components/ScrollToTop";
import { userData } from "./src/utils/userContext";
import React, { lazy, Suspense, useState, useEffect } from "react";
import Cart from "./src/components/Cart";
import { Coordinates } from "./src/utils/userContext";
import { Toaster } from "react-hot-toast";
import Search from "./src/components/Search";
import AboutSection from "./src/components/AboutSection";
import ServicesSection from "./src/components/ServicesSection";

// Redux
import { Provider } from "react-redux";
import store from "./src/utils/store";
import SignInOut from "./src/components/SignInOut";
import ContactSection from "./src/components/ContactSection";

const QuickBasket = lazy(() => import("./src/components/QuickBasket"));

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
        element: <Info />,
        children: [
          {
            path: "",
            element: <Navigate to="about" />, 
          },
          {
            path: "about",
            element: <AboutSection />,
          },
          {
            path: "contact",
            element: <ContactSection />,
          },
          {
            path: "services",
            element: <ServicesSection />,
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
          <Suspense fallback={<SearchRestaurantLoader />}>
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
        element: <Search />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
