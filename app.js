import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./src/components/Header";
import { Body } from "./src/components/Body";
import { Footer } from "./src/components/Footer";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import ProfileClass from "./src/components/ProfileClass";
import { SearchRestaurantLoader } from "./src/components/Shimmer";
import { userData } from "./src/utils/userContext";
import React, { lazy, Suspense, useState,useEffect } from "react";
import Cart from "./src/components/Cart";
import { Coordinates } from "./src/utils/userContext";
import Contact from "./src/components/Contact";
import { Toaster } from "react-hot-toast";

// Redux
import { Provider } from "react-redux";
import store from "./src/utils/store";
import SignInOut from "./src/components/SignInOut";

const Instamart = lazy(() => import("./src/components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Subhahsis",
    email: "spraharaj@gmail.com",
    age: 23,
    cast: "Bramhan",
  });

  const [coordinate, setCoordinate] = useState(() => {
    // Load saved location from localStorage if available, otherwise set to null
    const savedLocation = localStorage.getItem("savedLocation");
    return savedLocation ? JSON.parse(savedLocation) : { lat: null, lng: null, address: "" };
  });

  // Save location to localStorage whenever it changes
  useEffect(() => {
    if (coordinate.lat && coordinate.lng) {
      localStorage.setItem("savedLocation", JSON.stringify(coordinate));
    }
  }, [coordinate]);

  return (
    <Provider store={store}>
      <userData.Provider value={{ user, setUser }}>
        <Coordinates.Provider value={{ coordinate, setCoordinate }}>
          <Header />
          <Outlet />
          <Footer />
          <Toaster />
        </Coordinates.Provider>
      </userData.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profileclass",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/restaurant/:Resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<SearchRestaurantLoader />}>
            <Instamart />
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
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
