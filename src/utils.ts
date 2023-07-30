import md5 from 'md5';

export const valueIsNotNulish = (value: unknown): boolean => {
  return value !== undefined && value !== null;
};

export const md5str = (str: string): string => {
  return md5(str);
};

export const md5str2 = (str: string): string => {
  return md5(str);
};

console.log(md5str('123456'));

export default {
  valueIsNotNulish,
  md5str,
};
