import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from 'components/App';
import Login from 'components/Login';
import NotFound from 'components/NotFound';

const Router = () =>(
    <BrowserRouter>
        <Routes>
            <Route path="/welcome"  element={<App/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route component={NotFound} />
        </Routes>
    </BrowserRouter>
)
 
export default Router;