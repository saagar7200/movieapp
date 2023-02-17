import { useState } from "react";
import { MovieContext } from "./MovieContext";

interface IAuthProvider {
  children: any;
}

export const MovieProvider = ({ children }: IAuthProvider) => {
  const [search] = useState("");

  return (
    <MovieContext.Provider value={search}>{children}</MovieContext.Provider>
  );
};
