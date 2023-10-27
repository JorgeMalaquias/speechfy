import { Record } from '@prisma/client';

type RecordData = Omit<Record, 'id' | 'createdAt'>;
