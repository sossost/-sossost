type PromiseStatus = "pending" | "success" | "error";

export const wrapPromise = <T>(promise: Promise<T>) => {
  let status: PromiseStatus = "pending";
  let response: T | null = null;
  let error: Error | null = null;

  const suspender = promise.then(
    (res: T) => {
      status = "success";
      response = res;
    },
    (err: Error) => {
      status = "error";
      error = err;
    },
  );

  const read = (): T => {
    if (status === "pending") {
      throw suspender;
    } else if (status === "error") {
      throw error as Error;
    } else if (status === "success") {
      return response as T;
    }
    throw new Error("unreachable");
  };

  return { read };
};
