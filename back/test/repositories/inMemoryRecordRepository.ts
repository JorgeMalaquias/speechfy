import { Record } from '@prisma/client';
import { RecordRepository } from 'src/application/record/recordRepository';
import { RecordData } from 'src/types';

export class InMemoryRecordRepository implements RecordRepository {
  public records: Record[] = [];
  async create(record: RecordData): Promise<void> {
    await this.records.push({
      ...record,
      createdAt: new Date(),
      id: this.records.length + 1,
    });
  }
  async findMany(userId: string): Promise<Record[]> {
    return await this.records.filter((record) => record.userId === userId);
  }
}
