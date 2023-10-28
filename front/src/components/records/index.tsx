import { Record } from "../../pages/main";
import style from "./style";

interface RecordsProps {
  records: Record[];
}
interface RecordProps {
  record: Record;
}

function RecordComponent(props: RecordProps) {
  const { record } = props;
  return (
    <div>
      <p>{record.text}</p>
      <audio controls>
        <source src={record.audioUrl} type="audio/mpeg" />
      </audio>
    </div>
  );
}

function Records(props: RecordsProps) {
  const { records } = props;
  return (
    <style.Container>
      {records.length > 0 && <h1>Histórico de áudios</h1>}
      {records.length > 0 &&
        records.map((record) => <RecordComponent record={record} />)}
    </style.Container>
  );
}
export default Records;
