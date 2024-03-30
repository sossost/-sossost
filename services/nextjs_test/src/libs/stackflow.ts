import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import MyActivity from "../components/Activity";
import Article from "../components/Article";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  activities: {
    MyActivity,
    Article,
  },
  initialActivity: () => "MyActivity",
});
