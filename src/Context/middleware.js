import React, {useState} from 'react';
import {Provider} from './authContext';

const ContextProvider = ({children}) => {
  //const [isLogged, setIsLogged] = useState(true);
  return <Provider value={true}>{children}</Provider>;
};

export default ContextProvider;
