import { Injectable } from '@nestjs/common';

@Injectable()
export class RecordService {
  getHello(): string {
    return 'record route!';
  }
  create(): string {
    return 'record creation';
  }
}
