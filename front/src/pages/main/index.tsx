import { useEffect, useState } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  UploadResult,
} from "firebase/storage";
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { storage } from "../../services/firebase";
import axios, { AxiosRequestConfig } from "axios";
import { v4 } from "uuid";
import AudioModal from "../../components/audioModal";
import Records from "../../components/records";
import style from "./style";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { displayModal } from "../../redux/record/slice";

interface RecordDTO {
  userId: string;
  text: string;
  audioUrl: string;
}
export interface Record {
  id: number;
  userId: string;
  text: string;
  audioUrl: string;
  createdAt: Date;
}

function MainPage() {
  const [audioRecordNotStoredYet, setAudioRecordNotStoredYet] = useState<Blob>(
    {} as Blob
  );
  const [user, setUser] = useState<User>({} as User);
  const [text, setText] = useState<string>("");
  const [records, setRecords] = useState<Record[]>([]);
  const { updateRecords, newAudioUrl } = useAppSelector(
    (rootReducer) => rootReducer.recordReducer
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function leaveSession() {
    window.localStorage.clear();
    setUser({} as User);
    setTimeout(() => navigate("/auth"), 2000);
  }
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
        setAudioRecordNotStoredYet(blob);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function saveAudioUrlOnBackEnd(result: UploadResult) {
    getDownloadURL(result.ref).then((url) => {
      const body: RecordDTO = {
        audioUrl: url,
        text,
        userId: user.uid,
      };
      axios
        .post(`${import.meta.env.VITE_API_URL}/api/tts`, body)
        .then(() => {
          dispatch(displayModal(url));
        })
        .catch((error) => {
          console.log(error);
        });
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

  useEffect(() => {
    function storeAudio() {
      if (!audioRecordNotStoredYet.type) return;
      const audioRef = ref(
        storage,
        `audios/${v4()}.${audioRecordNotStoredYet.type.replace("audio/", "")}`
      );
      uploadBytes(audioRef, audioRecordNotStoredYet)
        .then((result) => {
          setAudioRecordNotStoredYet({} as Blob);
          saveAudioUrlOnBackEnd(result);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    }
    storeAudio();
  }, [audioRecordNotStoredYet]);

  useEffect(() => {
    function getRecords() {
      if (user.uid === undefined) return;
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/tts/${user.uid}`)
        .then((response) => {
          setRecords(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getRecords();
  }, [user, updateRecords]);

  return (
    <>
      <style.Container>
        {user.displayName && user.photoURL && (
          <style.UserInfos>
            <div>
              <img src={user.photoURL} alt={user.displayName} />
              <h2>{user.displayName}</h2>
            </div>
            <button onClick={leaveSession}>Encerrar sessão</button>
          </style.UserInfos>
        )}
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
      </style.Container>
      <Records records={records} />
      {newAudioUrl !== "" && <AudioModal />}
    </>
  );
}

export default MainPage;
