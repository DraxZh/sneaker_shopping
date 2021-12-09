import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from 'components/App';
import Login from 'components/Login';
import NotFound from 'components/NotFound';
import { Fragment } from 'react';
import Panel from 'components/Panel'

const Router = () =>(
    <Fragment>
        <Panel active={false} /> 
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<App/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route component={NotFound} />
        </Routes>
    </BrowserRouter>
    </Fragment>
)
 
export default Router;