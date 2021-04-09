import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer<typeof AppReducer>(
    AppReducer,
    initialState
  );

  // Actions
  function deleteTransaction(id: string) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction: any) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={
        {
          transactions: state.transactions,
          deleteTransaction,
          addTransaction,
        } as any
      }
    >
      {children}
    </GlobalContext.Provider>
  );
};
