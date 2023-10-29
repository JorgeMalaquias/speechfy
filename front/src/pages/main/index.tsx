import { useEffect, useState } from "react";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  UploadResult,
} from "firebase/storage";
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { storage } from "../../services/firebase";
import axios from "axios";
import { v4 } from "uuid";
import AudioModal from "../../components/audioModal";
import Records from "../../components/records";
import style from "./style";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  displayModal,
  resetNewAudioText,
  setRecords,
} from "../../redux/record/slice";
import Header from "../../components/header";
import FormNewAudio from "../../components/formNewAudio";

export interface RecordDTO {
  userId: string;
  text: string;
  audioUrl: string;
}
export interface Language {
  language: string;
  key: string;
}

function MainPage() {
  const [user, setUser] = useState<User>({} as User);
  const [audioRecordNotStoredYet, setAudioRecordNotStoredYet] = useState<Blob>(
    {} as Blob
  );
  const [leaveSessionModalTrigger, setLeaveSessionModalTrigger] =
    useState<boolean>(false);
  const { updateRecordsTrigger, newAudioUrl, newAudioText } = useAppSelector(
    (rootReducer) => rootReducer.recordReducer
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function leaveSession() {
    window.localStorage.clear();
    setUser({} as User);
    setTimeout(() => navigate("/auth"), 2000);
  }

  function saveAudioUrlOnBackEnd(result: UploadResult) {
    getDownloadURL(result.ref).then((url) => {
      const body: RecordDTO = {
        audioUrl: url,
        text: newAudioText,
        userId: user.uid,
      };
      axios
        .post(`${import.meta.env.VITE_API_URL}/api/tts`, body)
        .then(() => {
          dispatch(displayModal(url));
          dispatch(resetNewAudioText());
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
          dispatch(setRecords(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getRecords();
  }, [user, updateRecordsTrigger]);
  return (
    <>
      <Header />
      <style.Container>
        {user.displayName && user.photoURL && (
          <style.UserOptions>
            <style.UserInfos>
              <img src={user.photoURL} alt={user.displayName} />
              <h2>{user.displayName}</h2>
            </style.UserInfos>
            <button onClick={() => setLeaveSessionModalTrigger(true)}>
              Encerrar sessão
            </button>
          </style.UserOptions>
        )}
        <FormNewAudio setAudioRecordNotStoredYet={setAudioRecordNotStoredYet} />
      </style.Container>
      <Records />
      {newAudioUrl !== "" && <AudioModal />}
      {leaveSessionModalTrigger && (
        <style.LeaveSessionModal>
          <div>
            <p>Tem certeza que deseja deixar a sessão?</p>
            <style.ConfirmButtons>
              <style.ConfirmButton yesbutton={true} onClick={leaveSession}>
                Sim
              </style.ConfirmButton>
              <style.ConfirmButton
                yesbutton={false}
                onClick={() => setLeaveSessionModalTrigger(false)}
              >
                Cancelar
              </style.ConfirmButton>
            </style.ConfirmButtons>
          </div>
        </style.LeaveSessionModal>
      )}
    </>
  );
}

export default MainPage;
