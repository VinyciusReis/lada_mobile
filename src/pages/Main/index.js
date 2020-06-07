import React from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AuthContext from '../../Context/authContext';
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
  AvatarImage,
} from './styles';

function RenderVaga(props) {
  return (
    <Vaga>
      <TopSection>
        <Titulo>{props.job.title}</Titulo>
        <Empresa>{props.job.company}</Empresa>
      </TopSection>
      <MiddleSection>
        <Descricao numberOfLines={3}>{props.job.descption}</Descricao>
      </MiddleSection>
      <TopSection>
        <Salario>R$ {props.job.salary}</Salario>
        <Cidade>{props.job.city}</Cidade>
      </TopSection>
      <BottomSection>
        <Icon name="arrow-right" size={25} color="blue" />
      </BottomSection>
    </Vaga>
  );
}

class Main extends React.Component {
  static contextType = AuthContext;
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
      vaga: [],

      imageURL: '',
    };
  }

  componentDidMount() {
    let {user, vagas} = this.context;
    let nome = user.dev.avatar_url;
    let jobs = vagas.opportunitys;
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({imageURL: nome, vaga: jobs});
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
          keyExtractor={item => item._id}
        />
        <Perfil>
          <Avatar onPress={() => this.props.navigation.navigate('perfil')}>
            <AvatarImage source={{uri: this.state.imageURL}} />
          </Avatar>
        </Perfil>
      </Container>
    );
  }
}

export default Main;
