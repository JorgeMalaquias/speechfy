import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { hideModal } from "../../redux/record/slice";
import style from "./style";

function AudioModal() {
  const { newAudioUrl } = useAppSelector(
    (rootReducer) => rootReducer.recordReducer
  );
  const dispatch = useAppDispatch();
  return (
    <style.Container>
      {newAudioUrl && (
        <div>
          <style.Options>
            <p>Seu novo áudio foi gerado</p>
            <button onClick={() => dispatch(hideModal())}>Fechar</button>
          </style.Options>
          <audio controls>
            <source src={newAudioUrl} type="audio/mpeg" />
          </audio>
        </div>
      )}
    </style.Container>
  );
}

export default AudioModal;
