import React from 'react'
import { Router } from '@reach/router'

import ROUTES from 'constants/routes'

// Replace these variables with imports
const HomeView = () => <div>Home</div>
const LoginView = () => <div>Login</div>
const ManageView = () => <div>Manage</div>
const SettingsView = () => <div>Settings</div>

export default () => (
    <Router>
        <HomeView path={ROUTES.HOME} />
        <LoginView path={ROUTES.LOGIN} />
        <ManageView path={ROUTES.MANAGE} />
        <SettingsView path={ROUTES.SETTINGS} />
    </Router>
)
