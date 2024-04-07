export function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

export function deepCopyObject(object) {
  const coppiedObj = {};

  for (const key in object) {
    if (typeof object[key] === "object") {
      coppiedObj[key] = deepCopy(object[key]);
    } else {
      coppiedObj[key] = object[key];
    }
  }

  return coppiedObj;
}

export function deepCopyArray(array) {
  const coppiedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "object") {
      coppiedArray.push(deepCopy(array[i]));
    } else {
      coppiedArray.push(array[i]);
    }
  }

  return coppiedArray;
}

export function deepCopy(object) {
  const objectType = getType(object);

  switch (objectType) {
    case "Object":
      return deepCopyObject(object);
    case "Array":
      return deepCopyArray(object);
    case "Date":
      return new Date(object);
    case "RegExp":
      return new RegExp(object);
    case "Function":
      return object;
    case "Map":
      return new Map(object);
    case "Set":
      return new Set(object);
    default:
      return object;
  }
}
