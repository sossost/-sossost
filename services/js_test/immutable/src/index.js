export function deepCopy1(object) {
  const coppiedObj = Array.isArray(object) ? [] : {};
  for (const key in object) {
    if (typeof object[key] === "object") {
      coppiedObj[key] = deepCopy1(object[key]);
    } else {
      coppiedObj[key] = object[key];
    }
  }

  return coppiedObj;
}

export function deepCopy2(object) {
  return JSON.parse(JSON.stringify(object));
}
