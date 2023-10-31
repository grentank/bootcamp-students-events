import type { PGEntry } from './general';
import type { GroupsEvent } from './groupsEvent';

export type GroupEventTypeName = 'Завершение фазы' | 'Начало фазы';

export type GroupEventType = {
  name: GroupEventTypeName;
  events?: GroupsEvent[];
} & PGEntry;
