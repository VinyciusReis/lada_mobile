import React from 'react';
import {Alert} from 'react-native';
import {
  Container,
  ContainerLangsTechs,
  PerfilButtons,
  ButtonText,
  Avatar,
  ContainerAvatar,
  ContainerInfosPerfil,
  InputPerfil,
  Label,
  PerfilDiv,
} from './styles';

class Perfil extends React.Component {
  constructor() {
    super();
    this.state = {
      textoBotao: 'Editar',
      editableInput: false,
    };
  }

  editarSalvarInfos() {
    let textoBotao = this.state.textoBotao;
    let editableInput = this.state.editableInput;

    if (textoBotao === 'Editar') {
      this.setState({textoBotao: 'Salvar', editableInput: !editableInput});
    } else {
      this.setState({textoBotao: 'Editar', editableInput: !editableInput});
    }
  }

  render() {
    return (
      <Container>
        <ContainerAvatar>
          <Avatar source={require('../../images/recife.jpg')} />
        </ContainerAvatar>
        <ContainerInfosPerfil>
          <PerfilDiv>
            <Label>Nome</Label>
            <InputPerfil value="Vinycius Reis do Nascimento" editable={this.state.editableInput} />
          </PerfilDiv>
          <PerfilDiv>
            <Label>UserName</Label>
            <InputPerfil value="VinyciusReis" editable={this.state.editableInput} />
          </PerfilDiv>
          <PerfilDiv>
            <Label>Email</Label>
            <InputPerfil value="vinyciusrdn@hotmail.com" editable={this.state.editableInput} />
          </PerfilDiv>
          <PerfilDiv>
            <Label>Senha</Label>
            <InputPerfil value="12345678" editable={this.state.editableInput} />
          </PerfilDiv>
          <PerfilDiv>
            <Label>Phone</Label>
            <InputPerfil value="98923-6422" editable={this.state.editableInput} />
          </PerfilDiv>
        </ContainerInfosPerfil>
        <ContainerLangsTechs>
          <PerfilButtons>
            <ButtonText>Langs/Techs</ButtonText>
          </PerfilButtons>
          <PerfilButtons
            onPress={() => {
              this.editarSalvarInfos();
            }}>
            <ButtonText>{this.state.textoBotao}</ButtonText>
          </PerfilButtons>
        </ContainerLangsTechs>
      </Container>
    );
  }
}

export default Perfil;
