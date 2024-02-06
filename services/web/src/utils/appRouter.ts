export const isApp = () => {
  let isApp = true;

  if (typeof window !== "undefined" && window.ReactNativeWebView) {
    isApp = true;
  } else {
    isApp = false;
  }

  return isApp;
};

const sendRouterEvent = (path: string): void => {
  window?.ReactNativeWebView?.postMessage(
    JSON.stringify({ type: "ROUTER_EVENT", path })
  );
};

export const backNav = (router: any) => {
  if (isApp()) {
    sendRouterEvent("back");
  } else {
    router.back();
  }
};

export const pushNav = (router: any, url: string) => {
  if (isApp()) {
    sendRouterEvent(url);
  } else {
    router.push(url);
  }
};
