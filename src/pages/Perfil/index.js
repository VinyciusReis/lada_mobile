import React from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  Container,
  Avatar,
  Account,
  Infos,
  Input,
  Buttons,
  SimpleButton,
  TextButton,
} from './styles';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Editar',
      disabled: false,
    };
  }

  editarPerfil() {
    let buttonText = this.state.buttonText;
    if (buttonText === 'Editar') {
      this.setState({buttonText: 'Salvar'}, {disabled: !this.state.disabled});
    } else {
      this.setState({buttonText: 'Editar'}, {disabled: !this.state.disabled});
    }
  }

  deleteAccount() {
    Alert.alert(
      'Mensagem',
      'VOCÊ DESEJA REMOVER SUA CONTA?',
      [{text: 'SIM', style: 'default'}, {text: 'CANCELAR', style: 'cancel'}],
      {cancelable: false},
    );
  }

  render() {
    return (
      <Container>
        <Account>
          <Avatar source={require('../../../images/recife.jpg')} />
          <Icon name="trash" size={25} onPress={() => this.deleteAccount()} />
        </Account>
        <Infos>
          <Input editable={this.state.disabled} />
          <Input editable={this.state.disabled} />
          <Input editatble={this.state.disabled} />
          <Input editable={this.state.disabled} />
          <Input editable={this.state.disabled} />
          <Input editable={this.state.disabled} />
        </Infos>
        <Buttons>
          <SimpleButton
            onPress={() => {
              this.props.navigation.navigate('techs');
            }}>
            <TextButton>Techs</TextButton>
          </SimpleButton>
          <SimpleButton
            onPress={() => {
              this.editarPerfil();
            }}>
            <TextButton>{this.state.buttonText}</TextButton>
          </SimpleButton>
        </Buttons>
      </Container>
    );
  }
}

export default Perfil;
