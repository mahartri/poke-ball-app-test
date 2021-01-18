import { createContext, useContext } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


const AppContext = createContext();

export function AppWrapper({ children }) {
    let sharedState = {/* whatever you want */ }

    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}