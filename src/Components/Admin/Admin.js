import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './Admin.css';
import LeftBar from './LeftBar/LeftBar';
import Dashboard from '../../Page/AdminPanel/Dashboard/Dashboard';
import Contact from '../../Page/AdminPanel/Contact/Contact';
import Portfolio  from '../../Page/AdminPanel/Portfolio/Portfolio';




function Admin() {


    return (
        
            <Router>
                <div className="admin-conteiner">
                    <LeftBar/>
                    <Switch>
                        <Route path="/admin" exact component={Dashboard}/>
                        <Route path="/admin/contact" component={Contact}/>
                        <Route path="/admin/cooperation"/>
                        <Route path="/admin/portfolio" component={Portfolio}/>
                    </Switch>
                </div>
            </Router>
       
     
    )
}

export default Admin;
