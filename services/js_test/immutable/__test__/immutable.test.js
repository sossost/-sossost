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
    h: map1,
    i: set1,
  };
  const obj3 = {
    a: obj2,
  };
  const obj4 = {
    a: obj2,
    b: obj3,
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

  test.each(objArrForTest)(
    "test deepCopy function for object equality",
    (obj) => {
      expect(deepCopy(obj)).toEqual(obj);
    },
  );

  test.each(objArrForTest)(
    "test deepCopy function for object reference",
    (obj) => {
      expect(deepCopy(obj)).not.toBe(obj);
    },
  );
});
