import { BlogActionKey, ProductActionKey, UserActionKey } from './domains';
import { ActionContent } from './action-content.type';

export type ActionDomainContent = {
  blog: Partial<Record<BlogActionKey, ActionContent>>;
  user: Partial<Record<UserActionKey, ActionContent>>;
  product: Partial<
    Record<ProductActionKey, ActionContent>
  >;
};
