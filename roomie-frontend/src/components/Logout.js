import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./../context/AuthContext";
import axios from "axios";

function Logout(props) {
  const { setIsAuth } = useContext(AuthContext);

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "/api/users/logout",
        });
        //User will receive an invalid token as the response

        if (response.status === 200) {
          setIsAuth(false); // 1) When the user is redirected, the navbar will be updated
          localStorage.removeItem("isAuth"); // 2) Removing the information from localStorage
          localStorage.removeItem("userID");
          props.history.push("/"); // 3) Redirecting to the main page with the correct navbar
        }
      } catch (error) {
        return alert("Something went wrong! ❌");
      }
    };
    logoutUser();
  }, [props, setIsAuth]);

  return <Redirect to="/" />;
}

export default Logout;