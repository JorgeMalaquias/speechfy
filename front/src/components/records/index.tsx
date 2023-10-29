import { useAppSelector } from "../../redux/hooks";
import { Record } from "../../redux/record/slice";
import style from "./style";

interface RecordProps {
  record: Record;
}

function RecordComponent(props: RecordProps) {
  const { record } = props;
  return (
    <style.RecordContainer>
      <p>{record.text}</p>
      <audio controls>
        <source src={record.audioUrl} type="audio/mpeg" />
      </audio>
    </style.RecordContainer>
  );
}

function Records() {
  const { records } = useAppSelector(
    (rootReducer) => rootReducer.recordReducer
  );
  return (
    <style.Container>
      {records.length === 0 && <div>Você não possui áudios criados ainda!</div>}
      {records.length > 0 && <h1>Áudios criados</h1>}
      {records.length > 0 &&
        records.map((record) => <RecordComponent record={record} />)}
    </style.Container>
  );
}
export default Records;
