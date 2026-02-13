import { ValueOf } from '../utils/value-of';
import { CONTENT_CAPABILITIES, USER_CAPABILITIES } from './capabilities';

// CAPABILITIES Registry
export const FEATURE_CAPABILITIES = {
  CONTENT: CONTENT_CAPABILITIES,
  USERS: USER_CAPABILITIES,
} as const;

export type Capability = ValueOf<ValueOf<typeof FEATURE_CAPABILITIES>>;
