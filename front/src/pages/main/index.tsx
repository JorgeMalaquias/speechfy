import { useEffect, useState } from "react";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  list,
} from "firebase/storage";
import { storage } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [audioToStore, setAudioToStore] = useState<any>(null);
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
    const user = window.localStorage.getItem("user");
    if (!user) {
      alert(
        "É necessário estar logado para poder acessar!Você será redirecionado para área de login"
      );
      navigate("/auth");
      return;
    }
  }, []);
  function getRecordsData() {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/user/${user.uid}`)
      .then((response) => {
        console.log(response.data);
      });
  }
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
