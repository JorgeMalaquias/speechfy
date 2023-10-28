import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { hideModal } from "../../redux/record/slice";
import style from "./style";

function AudioModal() {
  const { newAudioUrl } = useAppSelector(
    (rootReducer) => rootReducer.recordReducer
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => dispatch(hideModal()), 50000);
  }, []);
  return (
    <style.Container newaudiourl={newAudioUrl}>
      {newAudioUrl && (
        <div>
          <div>
            <p>Seu novo áudio foi gerado</p>
            <button onClick={() => dispatch(hideModal())}>Fechar</button>
          </div>
          <audio controls>
            <source src={newAudioUrl} type="audio/mpeg" />
          </audio>
        </div>
      )}
    </style.Container>
  );
}

export default AudioModal;
