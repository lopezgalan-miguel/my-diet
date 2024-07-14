import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login';


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<Login />} />
        </Routes>
    </>
  )
}