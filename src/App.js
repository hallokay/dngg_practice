//각각의 페이지들을 불러와주어 경로연결
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./features/Main/Main";
import Register from "./features/Auth/Register";
import Login from "./features/Auth/Login";
import LinkPage from "./features/Linkpage/LinkPage";
import Unathorized from "./features/Unauthorized/Unauthorized";

import Editor from "./features/Main/Editor";
import Admin from "./features/Main/Admin";
import Lounge from "./features/Main/Lounge";
import Missing from "./features/Missing";
import RequireAuth from "./features/Auth/RequireAuth";

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public page */}
        <Route index element={<Main />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unathorized />} />

        {/* 사용자에따라 보호되는 페이지 */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Main />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor]} />}
        >
          <Route path="lounge" element={<Lounge />} />
        </Route>
        {/* 잘못된 경로로 진입시 */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
