import { Injectable } from '@nestjs/common';
import { Record } from '@prisma/client';
import { RecordRepository } from 'src/record/recordRepository';
import { RecordDTO } from 'src/types';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class PrismaRecordRepository implements RecordRepository {
  constructor(private prisma: PrismaService) {}
  async create(record: RecordDTO): Promise<void> {
    await this.prisma.record.create({
      data: {
        audioUrl: record.audioUrl,
        text: record.text,
        userId: record.userId,
      },
    });
  }
  async findMany(userId: string): Promise<Record[]> {
    return await this.prisma.record.findMany({
      where: {
        userId,
      },
    });
  }
}
