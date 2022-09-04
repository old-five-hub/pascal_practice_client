import axios from 'axios';
import { Message } from '@arco-design/web-react';

const mAxios = axios.create();

mAxios.interceptors.response.use(
  (data) => {
    return data;
  },
  (err) => {
    const msg = err.response.data.msg;
    Message.error(msg);
    return Promise.reject(err);
  }
);

export default mAxios;
