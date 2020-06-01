import React from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  Container,
  Form,
  InputSearch,
  Filtros,
  Card,
  Vaga,
  Dropdown,
  TopSection,
  MiddleSection,
  BottomSection,
  Titulo,
  Empresa,
  Descricao,
  Salario,
  Cidade,
  Perfil,
  Avatar,
} from './styles';

const avatar = require('../../../images/recife.jpg');

function RenderVaga(props) {
  return (
    <Vaga>
      <TopSection>
        <Titulo>{props.job.titulo}</Titulo>
        <Empresa>{props.job.empresa}</Empresa>
      </TopSection>
      <MiddleSection>
        <Descricao numberOfLines={3}>{props.job.descricao}</Descricao>
      </MiddleSection>
      <TopSection>
        <Salario>R$ {props.job.salario}</Salario>
        <Cidade>{props.job.cidade}</Cidade>
      </TopSection>
      <BottomSection>
        <Icon name="arrow-right" size={25} color="blue" />
      </BottomSection>
    </Vaga>
  );
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: '',
      selectedCity: '',
      languages: [
        'React',
        'React Native',
        'JavaScript',
        'AngularJS',
        'Java',
        'C#',
        'C++',
        'TypeScript',
      ],

      city: [
        'São Paulo',
        'Rio de Janeiro',
        'Fortaleza',
        'Recife',
        'Maceio',
        'João Pessoa',
        'Porto Alegre',
      ],
      vaga: [
        {
          titulo: 'Vaga de JavaScript',
          empresa: 'Linx',
          descricao:
            'Precisamos de desenvolvedores para fazer um projeto muito foda aqui na empresa, eu conto com a sua inscrição',
          salario: '3450.00',
          cidade: 'Recife',
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <Form>
          <Icon name="magnifier" size={25} />
          <InputSearch
            onChangeText={() => {}}
            placeholder="digite alguma coisa"
          />
        </Form>
        <Filtros>
          <Dropdown
            mode={Dropdown.MODE_DROPDOWN}
            selectedValue={this.state.selectedLanguage}
            onValueChange={(value, index) =>
              this.setState({selectedLanguage: value})
            }>
            {this.state.languages.map(item => (
              <Dropdown.Item value={item} label={item} />
            ))}
          </Dropdown>
          <Dropdown
            mode={Dropdown.MODE_DROPDOWN}
            selectedValue={this.state.selectedCity}
            onValueChange={(value, index) =>
              this.setState({selectedCity: value})
            }>
            {this.state.city.map(item => (
              <Dropdown.Item label={item} value={item} />
            ))}
          </Dropdown>
          <Dropdown>
            {this.state.languages.map(item => {
              <Dropdown.Item label={item} value={item} />;
            })}
          </Dropdown>
        </Filtros>
        <Card
          showsVerticalScrollIndicator={false}
          data={this.state.vaga}
          renderItem={({item}) => <RenderVaga job={item} />}
        />
        <Perfil>
          <Avatar source={avatar} />
        </Perfil>
      </Container>
    );
  }
}

export default Main;
