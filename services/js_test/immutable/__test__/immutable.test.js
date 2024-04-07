import { deepCopy } from "../src";

describe("deep copy test", () => {
  const obj1 = { a: 1, b: "a", c: "가" };
  const arr1 = [1, 2, obj1];
  const date1 = new Date();
  const regExp1 = new RegExp("a");
  const map1 = new Map();
  map1.set("a", 1);
  const set1 = new Set();
  set1.add(1);

  const obj2 = {
    a: 1,
    b: "a",
    c: "가",
    d: obj1,
    e: arr1,
    f: date1,
    g: regExp1,
    i: map1,
    j: set1,
  };
  const obj3 = {
    a: 1,
    b: "a",
    c: "가",
    d: obj1,
    e: arr1,
    f: date1,
    g: regExp1,
    h: map1,
    i: set1,
    j: obj2,
  };
  const obj4 = {
    a: 1,
    b: "a",
    c: "가",
    d: obj1,
    e: arr1,
    f: date1,
    g: regExp1,
    h: map1,
    i: set1,
    j: obj3,
  };

  const objArrForTest = [
    obj1,
    arr1,
    date1,
    regExp1,
    map1,
    set1,
    obj2,
    obj3,
    obj4,
  ];

  test.each(objArrForTest)("deepCopy1 function test", (obj) => {
    expect(deepCopy(obj)).toEqual(obj);
  });

  test.each(objArrForTest)("deepCopy1 function test2", (obj) => {
    expect(deepCopy(obj)).not.toBe(obj);
  });
});
