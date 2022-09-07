import { request } from '@/api/request';
import { CosType } from '@/constant/File';
import { AxiosRequestConfig } from 'axios';

export const uploadFile = async (payload: {
  cosType: CosType;
  file: File;
  options: AxiosRequestConfig;
}) => {
  const formData = new FormData();
  formData.append('cosType', payload.cosType);
  formData.append('file', payload.file);

  const res = await request({
    method: 'uploadFile',
    payload: formData,
    options: payload.options,
  });

  if (res.ok) {
    return res.val;
  }
  return Promise.reject(res.msg);
};
