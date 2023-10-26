import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth, storage } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AuthPage() {
  const [user, setUser] = useState<User>({} as User);
  const navigate = useNavigate();
  function handleGoogleAuth() {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        setUser(response.user);
        window.localStorage.setItem("user", JSON.stringify(response.user));
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocorreu um erro inesperado na autenticação!");
      });
  }
  function login() {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/user/${user.uid}`)
      .then((response) => {
        console.log(response.data);
      });
  }
  function register() {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/user/`)
      .then((response) => {
        console.log(response.data);
      });
  }
  console.log(user);
  return (
    <>
      <button onClick={handleGoogleAuth}>Entre com o Google</button>
    </>
  );
}

export default AuthPage;
