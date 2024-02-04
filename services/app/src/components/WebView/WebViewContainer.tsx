import React from "react";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { StackActions } from "@react-navigation/native";

interface WebViewContainerProps {
  navigation: any;
  route: any;
}

export const WebViewContainer = ({
  navigation,
  route,
}: WebViewContainerProps) => {
  const targetUrl = "https://d1gbspr5q497yq.cloudfront.net";
  const url = route.params?.url ?? targetUrl + "/community";

  const requestOnMessage = async (e: WebViewMessageEvent): Promise<void> => {
    const nativeEvent = JSON.parse(e.nativeEvent.data);
    if (nativeEvent?.type === "ROUTER_EVENT") {
      const path: string = nativeEvent.data;
      if (path === "back") {
        const popAction = StackActions.pop(1);
        navigation.dispatch(popAction);
      } else {
        const pushAction = StackActions.push("Details", {
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
