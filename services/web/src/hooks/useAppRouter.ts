"use client";

import { URL } from "url";
import { useRouter } from "next/navigation";
import { useWebView } from ".";

const BASE_URL = "";

interface SendRouterEventProps {
  path: string;
  screenName?: string;
  data?: any;
}

export const useAppRouter = () => {
  const { isWebView } = useWebView();
  const router = useRouter();

  const sendRouterEvent = ({
    path,
    screenName,
    data,
  }: SendRouterEventProps) => {
    window?.ReactNativeWebView?.postMessage(
      JSON.stringify({ type: "ROUTER_EVENT", path, screenName, data })
    );
  };

  const backNav = () => {
    if (isWebView) {
      sendRouterEvent({ path: "back" });
    } else {
      router.back();
    }
  };

  const pushNav = async (
    url: string,
    as?: URL | undefined,
    options: any = { shallow: true }
  ) => {
    return isWebView
      ? sendRouterEvent({
          path: `${BASE_URL}${url}`,
          screenName: options.appScreenName ?? "",
          data: { ...(options.appSendData ?? {}) },
        })
      : router.push(url, options);
  };

  return { pushNav, backNav };
};
