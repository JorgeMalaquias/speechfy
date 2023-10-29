import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Record } from '@prisma/client';
import { RecordDTO } from 'src/infra/DTOs/dtos';
import { RecordService } from 'src/application/record/record.service';

@Controller('/api/tts')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Get('/:userId')
  async findMany(@Param('userId') userId: string): Promise<Record[]> {
    return await this.recordService.findMany(userId);
  }
  @Post()
  async create(@Body() record: RecordDTO): Promise<void> {
    await this.recordService.create(record);
  }
}
