import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "chiku",
    email: "xyz@gmail.com",
    age: 23,
    cast: "Bramhan",
  },
  setUser: () => {}, // A default noop function, will be overridden by actual setter
});

export default userContext;
