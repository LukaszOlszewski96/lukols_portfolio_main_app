import React from 'react';
import Dashboard from '../../Page/AdminPanel/Dashboard/Dashboard';
import './Admin.css';
import LeftBar from './LeftBar/LeftBar';

function Admin() {
    return (
        <div className="admin-conteiner">
            <LeftBar/>
            <Dashboard/>
        </div>
    )
}

export default Admin;
