import { createContext, useContext, useEffect, useState } from "react";
import { MainApi } from "../api/Api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { use } from "react";

const AuthContext = createContext({
  token: null,
  isAuth: false,
  login: () => {},
  logout: () => {},
  registration: () => {},
});

export const AuthProvider = ({ children }) => {
  const initToken = Cookies.get("token");
  const [token, setToken] = useState(initToken);
  const navigate = useNavigate();

  useEffect(() => {
    token && validateToken();
  }, []);

  const validateToken = () => {
    console.log("validate token");

    MainApi.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        logout();
      });
  };

  const login = (userData) => {
    console.log("user data", userData);

    MainApi.post("/auth/login", {
      ...userData,
    })
      .then(({ data }) => {
        console.log({ data });
        setToken(data.accessToken);
        Cookies.set("token", data.accessToken, { expires: 14 });
        navigate("/counter", { replace: true });
        console.log(data.accessToken);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registration = (userData, cb) => {
    MainApi.post("/users/add", userData)
      .then((res) => {
        console.log(res);
        cb(res);
      })
      .catch((error) => console.log(error));
  };

  const logout = () => {
    Cookies.remove("token");
    setToken(null);
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        token,
        registration,
        // isAuth: token ? true : false,
        isAuth: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
