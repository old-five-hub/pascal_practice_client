import dayjs from 'dayjs';

export const time2BeforeStr = (date: string | number) => {
  const compDate = new Date(date).getTime();
  let time = new Date().getTime();
  time = parseInt(String((time - compDate) / 1000));

  //存储转换值
  let s;
  if (time < 60 * 10) {
    //十分钟内
    return '刚刚';
  } else if (time < 60 * 60 && time >= 60 * 10) {
    //超过十分钟少于1小时
    s = Math.floor(time / 60);
    return s + '分钟前';
  } else if (time < 60 * 60 * 24 && time >= 60 * 60) {
    //超过1小时少于24小时
    s = Math.floor(time / 60 / 60);
    return s + '小时前';
  } else if (time < 60 * 60 * 24 * 3 && time >= 60 * 60 * 24) {
    //超过1天少于3天内
    s = Math.floor(time / 60 / 60 / 24);
    return s + '天前';
  } else {
    //超过3天
    return time2NormalTimeStr(date);
  }
};

export const time2NormalTimeStr = (time: string | number) => {
  return dayjs(time).format('YYYY/MM/DD HH:mm:ss');
};
