import type { PGEntry } from './general';
import type { StudentsEvent } from './studentsEvent';

export type Student = {
  name: string;
  git: string;
  email: string;
  events?: StudentsEvent[];
} & PGEntry;
