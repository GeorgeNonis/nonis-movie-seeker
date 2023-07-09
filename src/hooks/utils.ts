export const ParseHandler = (str: string) => {
  const parsed = JSON.parse(str);

  return parsed;
};

export const StringifyHandler = (obj: Object) => {
  const stringified = JSON.stringify(obj);

  return stringified;
};

export default StringifyHandler;
