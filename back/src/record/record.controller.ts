import { Controller, Get } from '@nestjs/common';
import { RecordService } from './record.service';

@Controller('/api')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Get('/tts')
  getHello(): string {
    return this.recordService.getHello();
  }
}
