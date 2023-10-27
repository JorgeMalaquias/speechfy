import { RecordDTO } from 'src/types';

export abstract class RecordRepository {
  abstract create(record: RecordDTO): Promise<void>;
}
