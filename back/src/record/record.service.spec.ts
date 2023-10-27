import { RecordDTO } from 'src/types';
import { InMemoryRecordRepository } from '../../test/repositories/inMemoryRecordRepository';
import { RecordService } from './record.service';

describe('Record service unit tests', () => {
  it('should insert a new record', async () => {
    const recordRepository = new InMemoryRecordRepository();
    const recordService = new RecordService(recordRepository);
    const initialLength = recordRepository.records.length;

    const recordData: RecordDTO = {
      audioUrl: 'some string'.repeat(23),
      text: 'some string'.repeat(23),
      userId: 'some string'.repeat(23),
    };

    await recordService.create(recordData);
    const finalLength = recordRepository.records.length;

    expect(finalLength).toEqual(initialLength + 1);
    expect(recordRepository.records).toHaveLength(1);
    const index = recordRepository.records.length - 1;
    expect(recordRepository.records[index].audioUrl).toEqual(
      recordData.audioUrl,
    );
  });
  it('should return a list of records with a specific userId', async () => {
    const recordRepository = new InMemoryRecordRepository();
    const recordService = new RecordService(recordRepository);
    const recordsData: RecordDTO[] = [
      {
        audioUrl: 'some string'.repeat(23),
        text: 'some string'.repeat(23),
        userId: 'some string'.repeat(23),
      },
      {
        audioUrl: 'some string'.repeat(22),
        text: 'some string'.repeat(22),
        userId: 'some string'.repeat(22),
      },
      {
        audioUrl: 'some string'.repeat(21),
        text: 'some string'.repeat(21),
        userId: 'some string'.repeat(21),
      },
    ];
    await recordService.create(recordsData[0]);
    await recordService.create(recordsData[1]);
    await recordService.create(recordsData[2]);
    const records = await recordService.findMany(recordsData[0].userId);
    expect(records).toHaveLength(1);
    expect(records).toBeInstanceOf(Array);
  });
  it('should return a list of records with a specific userId', async () => {
    const recordRepository = new InMemoryRecordRepository();
    const recordService = new RecordService(recordRepository);
    const recordsData: RecordDTO[] = [
      {
        audioUrl: 'some string'.repeat(23),
        text: 'some string'.repeat(23),
        userId: 'some string'.repeat(23),
      },
      {
        audioUrl: 'some string'.repeat(22),
        text: 'some string'.repeat(22),
        userId: 'some string'.repeat(23),
      },
      {
        audioUrl: 'some string'.repeat(21),
        text: 'some string'.repeat(21),
        userId: 'some string'.repeat(21),
      },
    ];
    await recordService.create(recordsData[0]);
    await recordService.create(recordsData[1]);
    await recordService.create(recordsData[2]);
    const records = await recordService.findMany(recordsData[0].userId);
    expect(records).toHaveLength(2);
    expect(records).toBeInstanceOf(Array);
  });
});
