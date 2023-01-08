import { Navigate, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Registration from './pages/Registration'
import Login from './pages/Login'


export const useRoutes = (isLogined) => {
    
    if(isLogined) {
        return (
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
    )
}