import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Language } from "../../pages/main";
import { useAppDispatch } from "../../redux/hooks";
import { setNewAudioText } from "../../redux/record/slice";

interface Props {
  setAudioRecordNotStoredYet: React.Dispatch<React.SetStateAction<Blob>>;
}

function FormNewAudio(props: Props) {
  const [text, setText] = useState<string>("");
  const [languages, setLanguages] = useState<Language[]>([]);
  const [languageSelected, setLanguageSelected] = useState<string>("pt-br");
  const dispatch = useAppDispatch();

  function recordText(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(setNewAudioText(text));
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "https://text-to-speech27.p.rapidapi.com/speech",
      params: {
        text,
        lang: languageSelected,
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
        props.setAudioRecordNotStoredYet(blob);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "https://text-to-speech27.p.rapidapi.com/speech/lang",
      headers: {
        "X-RapidAPI-Key": "aa0aa4c24cmsh23d17e101d35972p1b8633jsn9835d9dd6dcc",
        "X-RapidAPI-Host": "text-to-speech27.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => {
        setLanguages(response.data);
        const languageArray: Language[] = [];
        for (let i in response.data) {
          languageArray.push({
            language: response.data[i],
            key: i,
          });
        }
        setLanguages(languageArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <form onSubmit={recordText}>
      <textarea
        value={text}
        placeholder="Digite o texto que gostaria de converter para áudio"
        required
        onChange={(event) => setText(event.target.value)}
      ></textarea>
      <div>
        <select
          id="languages"
          name="languages"
          value={languageSelected}
          required
          onChange={(event) => setLanguageSelected(event.target.value)}
        >
          {languages.map((language, index) => (
            <option key={index} value={language.key}>
              {language.language}
            </option>
          ))}
        </select>
        <button type="submit">Gerar Audio</button>
      </div>
    </form>
  );
}

export default FormNewAudio;
