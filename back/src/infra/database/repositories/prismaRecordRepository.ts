import { Injectable } from '@nestjs/common';
import { Record } from '@prisma/client';
import { RecordRepository } from 'src/application/record/recordRepository';
import { RecordData } from 'src/types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrismaRecordRepository implements RecordRepository {
  constructor(private prisma: PrismaService) {}
  async create(record: RecordData): Promise<void> {
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
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
