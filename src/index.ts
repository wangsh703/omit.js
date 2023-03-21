function omit(obj: Record<string, unknown>, fields: string[]) {
  // eslint-disable-next-line prefer-object-spread
  const shallowCopy: any = Object.assign({}, obj);
  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

export const sum = (a: number, b: number) => {
  return a + b;
};

export default omit;
