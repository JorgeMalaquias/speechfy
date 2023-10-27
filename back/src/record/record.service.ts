import { Injectable } from '@nestjs/common';
import { Record } from '@prisma/client';
import { RecordDTO } from 'src/types';
import { RecordRepository } from './recordRepository';

@Injectable()
export class RecordService {
  constructor(private recordRepository: RecordRepository) {}
  async findMany(userId: string): Promise<Record[]> {
    return await this.recordRepository.findMany(userId);
  }
  async create(record: RecordDTO): Promise<void> {
    await this.recordRepository.create(record);
  }
}
