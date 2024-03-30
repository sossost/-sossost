import { Routes as _Routes, Route } from "react-router-dom";
import Main from "./pages/Main.js";
import AsyncBoudaryPage from "./pages/AsyncBoundary/AsyncBoundaryPage";

const Routes = () => {
  return (
    <_Routes>
      <Route path="/" element={<Main />} />
      <Route path="/async_boundary" element={<AsyncBoudaryPage />} />
    </_Routes>
  );
};

export default Routes;
