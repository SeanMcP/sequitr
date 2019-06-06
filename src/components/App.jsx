import React from 'react'

import { AppStoreProvider } from 'stores/AppStore/AppStoreContext'
import Router from 'components/Router'

function App() {
    return (
        <div className="App">
            <AppStoreProvider>
                <Router />
            </AppStoreProvider>
        </div>
    )
}

export default App
