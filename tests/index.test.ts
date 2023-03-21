// import assert from 'assert';
import omit, { sum } from '../src';

describe('omit', () => {
  it('should create a shallow copy', () => {
    const benjy = { name: 'Benjy' };
    const copy = omit(benjy, []);
    expect(copy).toEqual(benjy);
  });

  it('should drop fields which are passed in', () => {
    const benjy = { name: 'Benjy', age: 18 };
    const target1 = omit(benjy, ['age']);
    const target2 = omit(benjy, ['age', 'name']);
    expect(target1).toEqual({ name: 'Benjy' });

    expect(target2).toEqual({});
  });
});

describe('sum', () => {
  it('两数字之和', () => {
    expect(sum(3, 4)).toEqual(7);
  });
});
