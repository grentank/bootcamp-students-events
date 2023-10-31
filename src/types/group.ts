import type { PGEntry } from './general';
import type { GroupsEvent } from './groupsEvent';
import type { StudentsEvent } from './studentsEvent';

export type Group = {
  name: string;
  studentsEvents?: StudentsEvent[];
  events?: GroupsEvent[];
} & PGEntry;
