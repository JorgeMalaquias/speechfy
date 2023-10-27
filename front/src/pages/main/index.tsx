import { useEffect, useState } from "react";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  list,
} from "firebase/storage";
import { User } from "firebase/auth";
import { storage } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [audioToStore, setAudioToStore] = useState<any>(null);
  const [user, setUser] = useState<User>({} as User);
  const navigate = useNavigate();
  function uploadFile() {
    if (audioToStore === null) {
      return;
    }
    const audioRef = ref(storage, `images/${audioToStore.name}`);
    uploadBytes(audioRef, audioToStore)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro de autenticação! Você será redirecionado para logar");
        setTimeout(() => navigate("/auth"), 2000);
      });
  }
  useEffect(() => {
    const localStorageData: string | null = window.localStorage.getItem("user");
    if (!localStorageData) {
      alert(
        "É necessário estar logado para poder acessar!Você será redirecionado para área de login"
      );
      navigate("/auth");
    } else {
      setUser(JSON.parse(localStorageData));
      if (!user) {
        alert(
          "É necessário estar logado para poder acessar!Você será redirecionado para área de login"
        );
        navigate("/auth");
      }
    }
  }, []);
  return (
    <>
      <input
        type="file"
        onChange={(event) => setAudioToStore(event.target.files?.[0])}
      />
      <button onClick={uploadFile}>Upload Image</button>
    </>
  );
}

export default MainPage;
