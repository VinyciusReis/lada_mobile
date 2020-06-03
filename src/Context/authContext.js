import React from 'react';

const AuthContext = React.createContext();

const Provider = AuthContext.Provider;
const Consumer = AuthContext.Consumer;

export {Provider};
export {Consumer};

export default AuthContext;
