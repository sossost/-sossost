import { Routes as _Routes, Route } from "react-router-dom";
import Main from "./pages/Main.js";
import AsyncBoundaryPage from "./pages/AsyncBoundaryPage.js";

const Routes = () => {
  return (
    <_Routes>
      <Route path="/" element={<Main />} />
      <Route path="/async_boundary" element={<AsyncBoundaryPage />} />
    </_Routes>
  );
};

export default Routes;
