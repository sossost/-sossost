import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../libs/stackflow";

const Activity: ActivityComponentType = () => {
  const { push } = useFlow();

  const onClick = () => {
    push("Article", {
      title: "Hello",
    });
  };

  return (
    <AppScreen appBar={{ title: "메인화면" }}>
      <div>
        My Activity
        <button onClick={onClick}>Go to article page</button>
      </div>
    </AppScreen>
  );
};

export default Activity;
