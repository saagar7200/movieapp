import {useState} from "react";
import {MovieContext} from "./MovieContext";

interface IAuthProvider {
  children: any;
}

export const MovieProvider = ({children}: IAuthProvider) => {

  const [search, setSearch] = useState("");

  

 

  // const value = {
  //   //   splashIsLoading,
  //   //   setSplashIsLoading,
  //   //   isAuthenticated,
  //   //   setIsAuthenticated,
  //   //   setFirstLaunchToLocalStorage,
  //   //   setIsAuthenticatedToLocalStorage,
  //   launchedFirstTime,
  //   setLaunchedFirstTime,
  //   token,
  //   setToken,
  //   setTokenToLocalStorage,
  // };
  return <MovieContext.Provider value={search}>{children}</MovieContext.Provider>;
};
