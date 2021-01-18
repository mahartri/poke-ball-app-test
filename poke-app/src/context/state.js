import { createContext, useContext, useReducer } from 'react';

// create initial state
const initialState = {
    pokemons: []
}

const AppContext = createContext(initialState);

export function AppWrapper({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'action description':
                const newState = '';// do something with the action
                return newState
            default:
                throw new Error();
        };
    }, initialState)
    // let sharedState = {/* whatever you want */ }

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}