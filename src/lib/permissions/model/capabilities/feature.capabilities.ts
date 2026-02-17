import { ValueOf } from '@/types/utils/value-of';
import {
  CONTENT_CAPABILITIES,
  USER_CAPABILITIES,
} from './domains';

// CAPABILITIES Registry
export const FEATURE_CAPABILITIES = {
  CONTENT: CONTENT_CAPABILITIES,
  USERS: USER_CAPABILITIES,
} as const;

export type Capability = ValueOf<ValueOf<typeof FEATURE_CAPABILITIES>>;
