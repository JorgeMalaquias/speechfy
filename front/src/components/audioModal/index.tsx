interface Props {
  newAudioUrl?: string;
}

function AudioModal(props: Props) {
  const { newAudioUrl } = props;
  return (
    <>
      {newAudioUrl && (
        <div>
          <div>
            <p>Seu novo áudio foi gerado</p>
            <button>Fechar</button>
          </div>
          <audio controls>
            <source src={newAudioUrl} type="audio/mpeg" />
          </audio>
        </div>
      )}
    </>
  );
}

export default AudioModal;
