import { Record } from '@prisma/client';

type RecordDTO = Omit<Record, 'id' | 'createdAt'>;
