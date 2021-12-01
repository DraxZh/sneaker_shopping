import React from 'react';
import {BrowserRouter, Swicth, Route} from 'react-router-dom';
import App from 'components/App';
import Login from 'components/Login';
import NotFound from 'components/NotFound';

const Router = () =>(
    <BrowserRouter>
        <Swicth>
            <Route path="/" exact component={App}/>
            <Route path="/login" component = {Login}/>
            <Route component={NotFound} />
        </Swicth>
    </BrowserRouter>
)
 
export default Router;