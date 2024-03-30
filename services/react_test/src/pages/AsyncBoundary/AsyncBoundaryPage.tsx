import AsyncBoundary from "../../components/AsyncBoundary";
import { wrapPromise } from "./wrapPromise";
import { fetchDataReject, fetchDataResolve } from "./fetchData";

const AsyncBoundaryPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "100px",
      }}
    >
      <h3>success</h3>
      <AsyncBoundary>
        <DataRenderSuccess />
      </AsyncBoundary>
      <h3>failure</h3>
      <AsyncBoundary>
        <DataRenderError />
      </AsyncBoundary>
    </div>
  );
};

export default AsyncBoundaryPage;

const fetchDataPromiseResolve = wrapPromise(fetchDataResolve());
const fetchDataPromiseReject = wrapPromise(fetchDataReject());

const DataRenderSuccess = () => {
  const data = fetchDataPromiseResolve.read();

  return <div>{data}</div>;
};

const DataRenderError = () => {
  const data = fetchDataPromiseReject.read();

  return <div>{data}</div>;
};
