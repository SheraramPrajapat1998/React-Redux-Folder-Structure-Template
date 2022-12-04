import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../components/Login/login';
import { CandidateDeclarationForm } from '../Screen/Forms/cdf.js';
import { NewJoineeForm } from '../Screen/Forms/newJoineeForm';
import Dashboard from '../Screen/Dashboard/dashboard';
import { EpfForm } from '../Screen/Forms/epf';

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to={'/login'} replace />} />
            <Route path='/login' element={<Login title={"Login"} />} />
            <Route path='/dashboard' element={<Dashboard title={"Dashboard"} />} />
        </Routes>
    )
}
