import type { PGEntry } from './general';
import type { StudentsEvent } from './studentsEvent';

export type StudentEventTypeName =
  | 'Зачисление в группу'
  | 'Отчисление из группы'
  | 'Уход на повтор'
  | 'Начало повтора фазы с группой';

export type StudentEventType = {
  name: StudentEventTypeName;
  events?: StudentsEvent[];
} & PGEntry;
