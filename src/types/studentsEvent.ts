import type { PGEntry } from './general';
import type { Group } from './group';
import type { Student } from './student';
import type { StudentEventType } from './studentEventTypes';

export type StudentsEvent = {
  groupId: number;
  studentId: number;
  studentEventTypeId: number;
  student?: Student;
  group?: Group;
  type?: StudentEventType;
} & PGEntry;
