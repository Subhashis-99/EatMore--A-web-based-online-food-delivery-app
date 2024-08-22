import { createContext } from "react";

export const userData = createContext({
  user: {
    name: "chiku",
    email: "xyz@gmail.com",
    age: 23,
    cast: "Bramhan",
  },
  setUser: () => {}, // A default noop function, will be overridden by actual setter
});

export const Coordinates = createContext({});
