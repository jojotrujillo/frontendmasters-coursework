import { createContext } from "react";

// Default value for createContext() is the contents from a hook, in this case,
// an array and the setter function for the array
// https://react.dev/reference/react/createContext#createcontext
export const CartContext = createContext([[], function () {}]);
