export function getObjectType(object) {
  return Object.prototype.toString.call(object).slice(8, -1);
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

export function deepCopyArray(object) {
  const coppiedObj = [];

  for (let i = 0; i < object.length; i++) {
    if (typeof object[i] === "object") {
      coppiedObj[i] = deepCopy(object[i]);
    } else {
      coppiedObj[i] = object[i];
    }
  }

  return coppiedObj;
}

export function deepCopy(object) {
  const objectType = getObjectType(object);

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
