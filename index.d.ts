declare function Omit<T, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K>;

export default Omit;
