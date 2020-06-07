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
  };

  const singUp = async dev => {
    const {username, nome, telefone, email_dev, senha} = dev;

    const response = await api.post('dev', {
      name: nome,
      username_github: username,
      phone: telefone,
      email: email_dev,
      password: senha,
    });

    if (response) {
      return 'PARABÉNS! CADASTRO FEITO COM SUCESSO';
    }
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

  const deleteDev = async () => {
    const response = await api.delete('dev/' + user.dev._id);
    if (response) {
      setIsLogged(false);
    }
  };

  const buscarVaga = async vaga_search => {
    const search_vaga = vaga_search;

    const response = await api.post('opportunitys/search', {
      search: search_vaga,
    });

    if (response) {
      setVagas(response.data);
    }
  };

  const atualizarDev = async dev => {
    const {username, nome, telefone, email_dev} = dev;
    const config = {
      headers: {
        Authorization: 'bearer ' + user.token,
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
        deleteDev,
        buscarVaga,
      }}>
      {children}
    </Provider>
  );
};

export default ContextProvider;
