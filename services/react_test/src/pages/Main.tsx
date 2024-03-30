import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>index</h1>
      <ul>
        {LIST_INFO.map((info) => (
          <li key={info.route}>
            <Link to={info.route}>{info.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;

const LIST_INFO = [{ route: "/async_boundary", name: "async boundary test" }];
