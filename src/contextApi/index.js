import React from 'react';

const AppContext = React.createContext()

export const Consumer = AppContext.Consumer
export const Provider = AppContext.Provider

export default AppContext;