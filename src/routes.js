import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import EditProfile from './pages/EditProfile';
import SignUp from './pages/SignUp';
import Result from './pages/Result';
import MyResumes from './pages/MyResumes';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/signup" exact component={SignUp}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/result" exact component={Result}/>
                <Route path="/my_resumes" exact component={MyResumes}/>
                <Route path="/profile" exact component={EditProfile}/>
            </Switch>
        </BrowserRouter>
    );
}


/*import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    );
}*/

//Switch: faz com que apenas uma rota seja executada por momento