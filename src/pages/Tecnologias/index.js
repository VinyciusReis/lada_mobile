import React, {useState, useEffect, useContext} from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  Container,
  Techs,
  TechName,
  TechScore,
  TechTitle,
  LangName,
  LangScore,
  LangTitle,
} from './styles';
import AuthContext from '../../Context/authContext';

const Tecnologias = () => {
  const [linguagens, setLinguagens] = useState(['Vinycius', 'Reis']);
  const [tecnologias, setTecnologias] = useState([]);
  const {listarTechs} = useContext(AuthContext);

  useEffect(() => {
    let {langs, techs} = listarTechs();
    setLinguagens(langs);
    setTecnologias(techs);
  }, []);

  return (
    <Container>
      <TechTitle>Tecnologias</TechTitle>
      {tecnologias.length === 0 ? (
        <Techs>
          <Icon name="close" color="red" size={35} />
        </Techs>
      ) : (
        tecnologias.map((item, index) => {
          return (
            <Techs key={toString(index)}>
              <TechName>{item.name}</TechName>
              <TechScore>{item.score}</TechScore>
            </Techs>
          );
        })
      )}
      <LangTitle>Linguagens</LangTitle>
      {linguagens.length === 0 ? (
        <Techs>
          <Icon name="close" color="red" size={35} />
        </Techs>
      ) : (
        linguagens.map((item, index) => {
          return (
            <Techs key={index}>
              <LangName>{item.name}</LangName>
              <LangScore>{item.score}</LangScore>
            </Techs>
          );
        })
      )}
    </Container>
  );
};

export default Tecnologias;
