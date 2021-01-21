import { createContext, useContext, useReducer } from 'react';

// create initial state
const initialState = {
    pokemons: []
}

const AppContext = createContext(initialState);

export function AppWrapper({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SET_POKEMONS_LIST':
                const newState = { ...state, pokemons: action.payload };// do something with the action
                return newState;
            default:
                throw new Error();
        };
    }, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}