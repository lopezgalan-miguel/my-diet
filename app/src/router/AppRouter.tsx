import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Main from '../pages/main';


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="*" element={<Navigate to="login" />} />
            <Route path="login" element={<Login />} />
            <Route path="main" element={<Main />} />
        </Routes>
    </>
  )
}