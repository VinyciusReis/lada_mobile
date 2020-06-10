import React from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import api from '../../Services/api';
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
        <Empresa>{props.job.company.name}</Empresa>
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
      selectedLanguage: 'Linguagens',
      selectedCity: 'Cidades',
      selectedTech: 'Tecnologias',
      languages: [
        'Linguagens',
        'C',
        'HTML',
        'JavaScript',
        'Swift',
        'Java',
        'C#',
        'C++',
        'TypeScript',
      ],

      city: [
        'Cidades',
        'São Paulo',
        'Rio de Janeiro',
        'Fortaleza',
        'Recife',
        'Maceio',
        'João Pessoa',
        'Porto Alegre',
        'Belo Horizonte',
        'Salvador',
      ],

      techs: ['Tecnologias', 'NodeJs', 'React', 'React Native', 'Angular'],
      vaga: [],

      imageURL: '#',
    };
  }

  async componentDidMount() {
    let {user} = this.context;
    let avatar = user.dev.avatar_url;
    let jobs = [];
    const response = await api.get('opportunitys');
    if (response) {
      jobs = response.data.opportunitys;
    }
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({imageURL: avatar, vaga: jobs});
  }

  componentWillUnmount() {
    this.setState({imageURL: '#', vaga: []});
  }

  async buscarVagas(valorBusca) {
    const response = await api.post('opportunitys/search', {
      search: valorBusca,
    });

    if (response) {
      this.setState({vaga: response.data.opportunitys});
    }
    /*let {buscarVaga, vagas} = this.context;
    let jobs;
    buscarVaga(search);
    jobs = vagas.opportunitys;
    this.setState({vaga: jobs});*/
  }

  async filtrarVagas(filtro, tipo) {
    var selectedLanguage = this.state.selectedLanguage;
    var selectedCity = this.state.selectedCity;
    var selectedTech = this.state.selectedTech;

    var cidade = '';
    var lang = [];
    var tech = [];

    if (tipo === 1) {
      if (selectedCity !== 'Cidades') {
        cidade = selectedCity;
      }

      if (selectedTech !== 'Tecnologias') {
        tech = [selectedTech];
      }

      if (filtro !== 'Linguagens') {
        selectedLanguage = filtro;
        lang = [filtro.toLowerCase()];
      } else {
        selectedLanguage = filtro;
      }
    }

    if (tipo === 2) {
      if (selectedLanguage !== 'Linguagens') {
        lang = [selectedLanguage.toLowerCase()];
      }

      if (selectedTech !== 'Tecnologias') {
        tech = [selectedTech];
      }

      if (filtro !== 'Cidades') {
        selectedCity = filtro;
        cidade = filtro;
      } else {
        selectedCity = filtro;
      }
    }

    if (tipo === 3) {
      if (selectedCity !== 'Cidades') {
        cidade = selectedCity;
      }

      if (selectedLanguage !== 'Linguagens') {
        lang = [selectedLanguage.toLowerCase()];
      }
      if (filtro !== 'Tecnologias') {
        selectedTech = filtro;
        tech = [filtro];
      } else {
        selectedTech = filtro;
      }
    }

    const response = await api.post('opportunitys/filter', {
      city: cidade,
      langs: lang,
      techs: tech,
    });

    this.setState({
      selectedCity: selectedCity,
      selectedLanguage: selectedLanguage,
      selectedTech: selectedTech,
      vaga: response.data.opportunitys,
    });
  }

  render() {
    return (
      <Container>
        <Form>
          <Icon name="magnifier" size={25} />
          <InputSearch
            onChangeText={text => {
              this.buscarVagas(text);
            }}
            placeholder="digite alguma coisa"
          />
        </Form>
        <Filtros>
          <Dropdown
            mode={Dropdown.MODE_DROPDOWN}
            selectedValue={this.state.selectedLanguage}
            onValueChange={(value, index) => {
              this.filtrarVagas(value, 1);
            }}>
            {this.state.languages.map(item => (
              <Dropdown.Item value={item} label={item} />
            ))}
          </Dropdown>
          <Dropdown
            mode={Dropdown.MODE_DROPDOWN}
            selectedValue={this.state.selectedCity}
            onValueChange={(value, index) => {
              this.filtrarVagas(value, 2);
            }}>
            {this.state.city.map(item => (
              <Dropdown.Item label={item} value={item} />
            ))}
          </Dropdown>
          <Dropdown
            mode={Dropdown.MODE_DROPDOWN}
            selectedValue={this.state.selectedTech}
            onValueChange={(value, index) => {
              this.filtrarVagas(value, 3);
            }}>
            {this.state.techs.map(item => (
              <Dropdown.Item label={item} value={item} />
            ))}
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
