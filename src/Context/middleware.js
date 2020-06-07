import React, {useState} from 'react';
import {Provider} from './authContext';
import api from '../Services/api';

const ContextProvider = ({children}) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const [vagas, setVagas] = useState({});

  const singIn = async (username, user_password) => {
    const response1 = await api.post('dev/login', {
      username_github: username,
      password: user_password,
    });

    const response2 = await api.get('opportunitys');

    if (response1) {
      Promise.all([response1, response2]).then(function(results) {
        setUser(results[0].data);
        setVagas(results[1].data);
        setIsLogged(true);
      });
    }

    /*api
      .post('dev/login', {
        username_github: username,
        password: user_password,
      })
      .then(response => {
        setUser(response.data);
        setIsLogged(true);
      })
      .catch(error => {
        return error.message;
      });
      */
  };

  const singUp = dev => {
    const {username, name, phone, email, password} = dev;

    api
      .post('dev', {
        name: name,
        username_github: username,
        phone: phone,
        email: email,
        password: password,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const logOut = () => {
    setIsLogged(false);
  };

  const listarTechs = () => {
    const lang_techs = {
      langs: user.dev.langs,
      techs: user.dev.techs,
    };

    return lang_techs;
  };

  const atualizarDev = async dev => {
    const {username, nome, telefone, email_dev} = dev;
    const config = {
      headers: {
        Authorization: 'bearer ' + user.dev.token,
      },
    };
    const response = await api.put(
      'dev',
      {
        username_github: username,
        name: nome,
        password: '123456789',
        phone: telefone,
        email: email_dev,
      },
      config,
    );

    if (response) {
      setUser(response.data);
    }

    /*api.put('/dev', {
      username_github: username,
      name: name,
      password: password,
      phone: phone,
      email: email,
    }).then(response => {



    })*/
  };
  return (
    <Provider
      value={{
        isLogged,
        user,
        vagas,
        singIn,
        logOut,
        singUp,
        listarTechs,
        atualizarDev,
      }}>
      {children}
    </Provider>
  );
};

export default ContextProvider;
