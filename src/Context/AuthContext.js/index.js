import { createContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";

const initialValues = {
  data: {
    token: "",
    accessToken: "",
    user: {
      createdAt: "",
      updatedAt: "",
      id: 0,
      firstName: "",
      isFollower: false,
      userName: "",
      lastName: null,
      displayName: "",
      email: "",
      role: undefined,
      userType: null,
      phoneNumber: "",
      thumbnail: "",
      bannerImage: undefined,
      bio: null,
      about: null,
      isVerified: false,
      isDeleted: false,
      organizationId: null,
      notificationId: null,
      isActive: 0,
      idProof: null,
      isKycVerified: false,
      idProofType: null,
      idProofImage: null,
      followers: "",
      following: "",
      owned: "",
      oldPassword: "",
      password: "",
    },
    sessionId: "",
  },
};

function authReducer(state, action) {
  switch (action.type) {
    case "SIGN_UP": {
      const copyState = { ...state };
      copyState.data.user = action.value;
      return copyState;
    }

    case "SET_TOKEN": {
      const copyState = { ...state };
      copyState.data = {
        ...action.data,
        sessionId: copyState.data.sessionId,
        user: { ...action.data.user, owned: action?.data?.owned },
      };
      localStorage.setItem("tradible", JSON.stringify(action.data));
      return copyState;
    }

    case "SET_SESSIONID": {
      const copyState = { ...state };
      copyState.data.sessionId = action.value;
      if (action.value) {
        localStorage.setItem("tradible-session", JSON.stringify(action.value));
      }
      return copyState;
    }

    case "REMOVE_TOKEN": {
      const copyState = { ...state };
      copyState.data = {
        token: "",
        user: {},
        sessionId: copyState.data.sessionId,
        accessToken: "",
      };
      localStorage.removeItem("tradible");
      window.location.href = "/login";
      return copyState;
    }

    case "UPDATE_USER_DATA": {
      const copyState = { ...state };
      copyState.data.user = action.data;
      localStorage.removeItem("tradible");
      localStorage.setItem("tradible", JSON.stringify(copyState.data));
      return copyState;
    }

    default:
      return state;
  }
}

export const AuthContext = createContext({
  state: initialValues,
  dispatch: undefined,
});

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialValues);

  useEffect(() => {
    const data = localStorage.getItem("tradible");
    if (!data) return;
    const parseData = JSON.parse(data);
    if (parseData) dispatch({ type: "SET_TOKEN", data: parseData });
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("tradible-session");
    if (data) {
      dispatch({ type: "SET_SESSIONID", value: data.replaceAll('"', "") });
    }
  }, []);

  useEffect(() => {
    const token = state.data.token;
    if (token) {
      const decodedJwt = JSON.parse(atob(token.split(".")[1]));
      const leftExp = Math.floor(decodedJwt.exp * 1000 - Date.now());
      if (decodedJwt.exp * 1000 < Date.now()) {
        dispatch?.({ type: "REMOVE_TOKEN" });
      } else {
        setTimeout(() => {
          toast.warning("Session Expired!");
          dispatch?.({ type: "REMOVE_TOKEN" });
        }, leftExp);
      }
    }
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
