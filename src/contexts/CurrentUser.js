import React, { createContext, useContext, useState} from "react";

const initialCurrentUser = {
    user: {
        _id: "",
        name: "",
    },
    filters: {

    }
  }

const CurrentUserContext = createContext(initialCurrentUser);

export const useCurrentUser = ()=>{
  return useContext(CurrentUserContext);
}

export const CurrentUserProvider = ({children})=>{
  const [currentUser, setCurrentUser] = useState(initialCurrentUser.user);
  const [currentFilters, setCurrentFilters] = useState(initialCurrentUser.filters);

  
  return (
    <CurrentUserContext.Provider value={{
      user: currentUser,
      filters: currentFilters,
    }}>
      {children}
    </CurrentUserContext.Provider>
  )
}