import type { PGEntry } from './general';
import type { Group } from './group';
import type { GroupEventType } from './groupEventTypes';
import type { Phase } from './phase';

export type GroupsEvent = {
  groupId: number;
  phaseId: number;
  groupEventTypeId: number;
  group?: Group;
  phase?: Phase;
  type?: GroupEventType;
} & PGEntry;
