import React from 'react';
import {} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  Container,
  Form,
  InputSearch,
  Filtros,
  Cards,
  Vaga,
  VagaInf,
  VagaSup,
  VagaMiddle,
  Titulo,
  Empresa,
  Salario,
  Cidade,
  Descricao,
  Perfil,
  Avatar,
  Dropdown,
} from './styles';

const img = require('../../images/recife.jpg');

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'JavaScript',
      vaga: [
        {
          title: 'JavaScript',
          company: 'Linx',
          salary: 3500,
          city: 'recife',
          description:
            'Precisamos de desenvolverdores javascript para atuar em um projeto muito foda aqui na minha empresa. candidatem-se',
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <Form>
          <Icon name="magnifier" size={25} />
          <InputSearch placeholder="Search" />
        </Form>
        <Filtros>
          <Dropdown
            selectedValue={this.state.language}
            onValueChange={(value, index) => {
              this.setState({language: value});
            }}>
            <Dropdown.Item label="Techs" value="techs" />
            <Dropdown.Item label="React" value="react" />
            <Dropdown.Item label="JavaScript" value="javascript" />
          </Dropdown>
          <Dropdown
            selectedValue={this.state.language}
            onValueChange={(value, index) => {
              this.setState({language: value});
            }}>
            <Dropdown.Item label="Techs" value="techs" />
            <Dropdown.Item label="React" value="react" />
            <Dropdown.Item label="JavaScript" value="javascript" />
          </Dropdown>
          <Dropdown
            selectedValue={this.state.language}
            onValueChange={(value, index) => {
              this.setState({language: value});
            }}>
            <Dropdown.Item label="Techs" value="techs" />
            <Dropdown.Item label="React" value="react" />
            <Dropdown.Item label="JavaScript" value="javascript" />
          </Dropdown>
        </Filtros>
        <Cards showsVerticalScrollIndicator={false}>
          {this.state.vaga.map(data => (
            <Vaga>
              <VagaSup>
                <Titulo>{data.title}</Titulo>
                <Empresa>{data.company}</Empresa>
              </VagaSup>
              <VagaMiddle>
                <Descricao numberOfLines={3}>{data.description}</Descricao>
              </VagaMiddle>
              <VagaSup>
                <Salario>R$ {data.salary}</Salario>
                <Cidade>{data.city}</Cidade>
              </VagaSup>
              <VagaInf>
                <Icon name="arrow-right" size={25} color="blue" />
              </VagaInf>
            </Vaga>
          ))}
        </Cards>
        <Perfil>
          <Avatar source={img} />
        </Perfil>
      </Container>
    );
  }
}

export default Main;
