export const fetchDataResolve = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
    }, 1000);
  });
};

export const fetchDataReject = async (): Promise<string> => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("error"));
    }, 1000);
  });
};
