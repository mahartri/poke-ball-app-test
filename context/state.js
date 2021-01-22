import { createContext, useContext, useReducer } from 'react';

// create initial state
const initialState = {
    pokemons: [],
    totalOwned: 0
}

const AppContext = createContext(initialState);

export function AppWrapper({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        let newState;
        switch (action.type) {
            case 'SET_POKEMONS_LIST':
                newState = { ...state, pokemons: action.payload };
                return newState;
            case 'SET_NUMBER_OF_MY_POKEMON':
                newState = { ...state, totalOwned: action.payload };
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