import { Record } from '@prisma/client';
import { RecordDTO } from 'src/types';

export abstract class RecordRepository {
  abstract create(record: RecordDTO): Promise<void>;
  abstract findMany(userId: string): Promise<Record[]>;
}
