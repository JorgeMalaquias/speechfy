import { useEffect, useState } from "react";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  list,
} from "firebase/storage";
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { storage } from "../../services/firebase";
import axios, { AxiosRequestConfig } from "axios";

function MainPage() {
  const [audioRecorded, setAudioRecorded] = useState<Blob>({} as Blob);
  const [user, setUser] = useState<User>({} as User);
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();

  function recordText(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "https://text-to-speech27.p.rapidapi.com/speech",
      params: {
        text,
        lang: "en-us",
      },
      headers: {
        "X-RapidAPI-Key": "aa0aa4c24cmsh23d17e101d35972p1b8633jsn9835d9dd6dcc",
        "X-RapidAPI-Host": "text-to-speech27.p.rapidapi.com",
      },
      responseType: "arraybuffer",
    };
    axios
      .request(options)
      .then((response) => {
        const blob = new Blob([response.data], {
          type: "audio/mpeg",
        });
        setAudioRecorded(blob);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    function storeAudio() {
      if (!audioRecorded.type) {
        return;
      }
      const audioRef = ref(storage, `images/${text.slice(0, 20)}`);
      uploadBytes(audioRef, audioRecorded)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
          //setTimeout(() => navigate("/auth"), 2000);
        });
    }
    storeAudio();
  }, [audioRecorded]);

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
      <form onSubmit={recordText}>
        <input
          value={text}
          type="text"
          placeholder="Digite o texto que gostaria de converter para áudio"
          required
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Gerar Audio</button>
      </form>
    </>
  );
}

export default MainPage;
