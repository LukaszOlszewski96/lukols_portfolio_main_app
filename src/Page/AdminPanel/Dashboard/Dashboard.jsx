import React from 'react';
import HeaderDashboard from '../../../Components/Admin/Header/HeaderDashboard';
import StatBoxBtn from '../../../Components/Admin/TopBar/StatBoxBtn';
import './Dashboard.css';

function Dashboard() {
    return (
        <>
            <div className="dashboard-frame">
                <HeaderDashboard/>
                <StatBoxBtn/>
            </div>   
        </>
    )
}

export default Dashboard;
