import React from "react";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { StackActions } from "@react-navigation/native";

import { LINK } from "constants/Link";

interface WebViewContainerProps {
  navigation: any;
  route: any;
}

export const WebViewContainer = ({
  navigation,
  route,
}: WebViewContainerProps) => {
  const targetUrl = "http://localhost:3000/";
  const url = route.params?.url ?? targetUrl;

  const requestOnMessage = async (e: WebViewMessageEvent): Promise<void> => {
    const nativeEvent = JSON.parse(e.nativeEvent.data);

    if (nativeEvent?.type === "ROUTER_EVENT") {
      const { path } = nativeEvent;
      if (path === "back") {
        const popAction = StackActions.pop(1);
        navigation.dispatch(popAction);
      } else {
        const pushAction = StackActions.push(path === "" ? LINK.MAIN : path, {
          url: `${targetUrl}${path}`,
          isStack: true,
        });
        navigation.dispatch(pushAction);
      }
    }
  };

  return (
    <WebView
      originWhitelist={["*"]}
      source={{ uri: url }}
      onMessage={requestOnMessage}
    />
  );
};
