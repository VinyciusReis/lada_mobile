import React, {useState} from 'react';
import {Provider} from './authContext';
import api from '../Services/api';

const ContextProvider = ({children}) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  //const [vagas, setVagas] = useState({});
  const [token, setToken] = useState('');
  const [senha, setSenha] = useState('');

  const singIn = async (username, user_password) => {
    const response1 = await api.post('dev/login', {
      username_github: username,
      password: user_password,
    });

    if (response1) {
      setSenha(user_password);
      setUser(response1.data);
      setToken(response1.data.token);
      setIsLogged(true);
    }

    /*const response2 = await api.get('opportunitys');

    if (response1) {
      Promise.all([response1, response2]).then(function(results) {
        setUser(results[0].data);
        setToken(results[0].data.token);
        setVagas(results[1].data);
        setIsLogged(true);
      });
    }
    */
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
      //setVagas(response.data);
    }
  };

  const filtrarVaga = async filtros => {
    //var {cidade, linguagens, tecnologias} = filtros;
    const response = await api.post('opportunitys/filter', {
      city: '',
      langs: ['java'],
      techs: [],
    });

    if (response) {
      //return setVagas(response.data);
    }
  };

  const atualizarDev = async dev => {
    const {username, nome, telefone, email_dev, senha_dev} = dev;
    const config = {
      headers: {
        Authorization: 'bearer ' + token,
      },
    };
    const response = await api.put(
      'dev',
      {
        username_github: username,
        name: nome,
        password: senha_dev,
        phone: telefone,
        email: email_dev,
      },
      config,
    );

    if (response) {
      setSenha(senha_dev);
      setUser(response.data);
    }
  };
  return (
    <Provider
      value={{
        isLogged,
        user,
        token,
        senha,
        singIn,
        logOut,
        singUp,
        listarTechs,
        atualizarDev,
        deleteDev,
        buscarVaga,
        filtrarVaga,
      }}>
      {children}
    </Provider>
  );
};

export default ContextProvider;
