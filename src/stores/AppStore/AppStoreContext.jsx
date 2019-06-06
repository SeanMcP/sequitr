import React from 'react'

import { initialState, reducer } from './AppStoreReducer'

const AppStoreContext = React.createContext()

export const AppStoreProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <AppStoreContext.Provider value={{ dispatch, state }}>
            {children}
        </AppStoreContext.Provider>
    )
}

export const useAppStore = () => {
    const context = React.useContext(AppStoreContext)
    if (!context) {
        throw Error(
            'Uh oh! Did you forget call useAppStore within the AppStoreProvider?'
        )
    }
    const { state } = context
    return [state]
}
