//각각의 페이지들을 불러와주어 경로연결
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Main from './features/Main/Main'
import Register from './features/Register/Register'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout/> }>
        <Route index element={<Main/>} />

        <Route path="register" element={<Register/>}/>

      </Route>

      {/* 잘못된 경로로 진입시 */}
      <Route path="*" element={<Navigate to="/" replace/>} />
    </Routes>
  );
}

export default App;
