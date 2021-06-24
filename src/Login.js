import { Button } from "@material-ui/core";
import React from "react";
import "./login.css";
import { auth, provider } from "./firebase";
// import { login } from "./feautures/userSlice";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";
function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          })
        );
      })
      .catch((error) => alert(error.message));
    // .catch(error=>alert(error.message));
    // .catch((err)=>alert(err.message));
    // .catch((error) => alert(error.message))
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/172206i70472167E79B9D0F/image-size/large?v=1.0&px=999"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
