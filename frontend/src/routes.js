import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import  Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident';

// Switch garantirá que apenas uma rota seja executada por vez
// exact garante que o caminho para acessar a págin de Logon seja exatamente
// o que fora determina pelo path

export default function Routes() {
    return  (
        < BrowserRouter >        
            <switch>
                <Route path="/" exact component = { Logon } />
                <Route path="/register" component= { Register } />
                <Route path="/profile" component = {Profile} />
                <Route path="/incidents/new" component = {NewIncident} />
            </switch>
        </BrowserRouter>
    )
}