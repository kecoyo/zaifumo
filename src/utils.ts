import execa from 'execa';
import md5 from 'md5';
import shelljs from 'shelljs';

export const valueIsNotNulish = (value: unknown): boolean => {
  return value !== undefined && value !== null;
};

export const md5str = (str: string): string => {
  return md5(str);
};

export const testShelljs = () => {
  return shelljs.ls('./');
};

export const testExeca = async () => {
  return await execa('git', ['status']);
};

console.log(md5str('123456'));

export default {
  valueIsNotNulish,
  md5str,
};
