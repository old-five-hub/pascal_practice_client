import { atom } from 'recoil';

export * from './effect';

export const tagListState = atom({
  key: 'tagListState',
  default: [],
});
