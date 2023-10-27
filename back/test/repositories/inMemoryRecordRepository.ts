import { Record } from '@prisma/client';
import { RecordRepository } from 'src/record/recordRepository';
import { RecordDTO } from 'src/types';

export class InMemoryRecordRepository implements RecordRepository {
  public records: Record[] = [];
  async create(record: RecordDTO): Promise<void> {
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
