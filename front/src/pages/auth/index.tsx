import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const navigate = useNavigate();
  function handleGoogleAuth() {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        window.localStorage.setItem("user", JSON.stringify(response.user));
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <button onClick={handleGoogleAuth}>Entre com o Google</button>
    </>
  );
}

export default AuthPage;
