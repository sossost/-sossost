import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

type ArticleParams = {
  title: string;
};
const Article: ActivityComponentType<ArticleParams> = ({ params }) => {
  return (
    <AppScreen appBar={{ title: "아티클" }}>
      <div>
        <h1>{params.title}</h1>
      </div>
    </AppScreen>
  );
};

export default Article;
