import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginView from './views/LoginView';
import ListView from './views/ListView';
import Navbar from './components/navbar';


class Router extends React.Component {
    // TODO
    render() {
        return(
            
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<ListView />} />
                    <Route path="/login" exact element={<LoginView />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;