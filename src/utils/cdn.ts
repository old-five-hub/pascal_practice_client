import { filePrefix } from '@/constant/cdn';

export const uri2Url = (uri: string) => {
  return `${filePrefix}/${uri}`;
};
