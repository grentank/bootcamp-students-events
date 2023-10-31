import type { PGEntry } from './general';
import type { GroupsEvent } from './groupsEvent';

export type PhaseName = 'Фаза 1' | 'Фаза 2' | 'Фаза 3' | 'Выпускники' | 'Прекратившие обучение';

export type Phase = {
  name: PhaseName;
  events?: GroupsEvent[];
} & PGEntry;
