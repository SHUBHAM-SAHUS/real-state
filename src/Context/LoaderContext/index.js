import { createContext, useReducer } from "react";

const initialValues = {
  isLoad: false,
};

function authReducer(state, action) {
  return { ...state, isLoad: action };
}

export const LoaderContext = createContext({
  state: initialValues,
  showLoader: () => {},
});

export const LoaderContextProvider = ({ children }) => {
  const [state, showLoader] = useReducer(authReducer, initialValues);

  return (
    <LoaderContext.Provider value={{ state, showLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};
