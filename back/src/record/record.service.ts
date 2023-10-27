import { Injectable } from '@nestjs/common';
import { Record } from '@prisma/client';
import { RecordData } from 'src/types';
import { RecordRepository } from './recordRepository';

@Injectable()
export class RecordService {
  constructor(private recordRepository: RecordRepository) {}
  async findMany(userId: string): Promise<Record[]> {
    return await this.recordRepository.findMany(userId);
  }
  async create(record: RecordData): Promise<void> {
    await this.recordRepository.create(record);
  }
}
