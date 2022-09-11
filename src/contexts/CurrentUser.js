import React, { createContext, useContext, useState, useCallback } from "react";

const initialCurrentUser = {
  user: {
    _id: "",
    name: "",
    email: "",
  },
  filters: {},
};

const CurrentUserContext = createContext(initialCurrentUser);

export const useCurrentUser = () => {
  return useContext(CurrentUserContext);
};

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(initialCurrentUser.user);
  const [currentFilters, setCurrentFilters] = useState(
    initialCurrentUser.filters
  );

  const changeCurrentUser = useCallback((userData)=>{
    //setCurrentUser(userData);
    setCurrentUser(prevState => {
      return {...prevState, ...userData};
    });
  }, []);

  const changeCurrentFilters = useCallback((filtersData)=>{
    setCurrentFilters(prevState => {
      return {...prevState, ...filtersData};
    });
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        user: currentUser,
        filters: currentFilters,
        changeCurrentUser: changeCurrentUser,
        changeCurrentFilters: changeCurrentFilters,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
