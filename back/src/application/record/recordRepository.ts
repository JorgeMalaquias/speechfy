import { Record } from '@prisma/client';
import { RecordData } from 'src/types';

export abstract class RecordRepository {
  abstract create(record: RecordData): Promise<void>;
  abstract findMany(userId: string): Promise<Record[]>;
}
