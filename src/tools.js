// 方法一：利用迭代器函数
Object.prototype[Symbol.iterator] = function* () {
  const keys = Object.keys(this);
  for (const key of keys) {
    yield [key, this[key]];
  }
};

// 方法二：自定义函数实现迭代器函数
Object.prototype[Symbol.iterator] = function () {
  const keys = Object.keys(this);
  const self = this;
  const keyLength = keys.length;
  let count = 0;
  return {
    next: function () {
      return count > keyLength
        ? {
            value: undefined,
            done: true,
          }
        : {
            value: [keys[count], self[keys[count++]]],
            done: false,
          };
    },
  };
};
// const obj = {a:1,b:2}
// for (const [key,value] of obj) {
//     console.log(key,value);
// }

// Map支持序列化
function replacer(key, value) {
  if (value instanceof Map) {
    return {
      type: 'Map',
      value: [...value],
    };
  } else {
    return value;
  }
}

function reviver(key, value) {
  if (value.type === 'Map') {
    return new Map(value.value);
  } else {
    return value;
  }
}
const m = new Map();
m.set('a', 1);
m.set('b', 2);
m.set({ a: 1 }, 3);
m.set([1, 2, 3], 4);
const str = JSON.stringify(m, replacer);
const parse = JSON.parse(str, reviver);
console.log(str); // {"type":"Map","value":[["a",1],["b",2],[{"a":1},3],[[1,2,3],4]]}
console.log(parse); // Map(4) { 'a' => 1, 'b' => 2, { a: 1 } => 3, [ 1, 2, 3 ] => 4 }
