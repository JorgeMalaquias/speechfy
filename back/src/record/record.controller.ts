import { Controller, Get, Post } from '@nestjs/common';
import { RecordService } from './record.service';

@Controller('/api/tts')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Get()
  getHello(): string {
    return this.recordService.getHello();
  }
  @Post()
  create(): string {
    return this.recordService.getHello();
  }
}
