import {
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startHome } from '../../actions/navigationActions';

// Images
import logo from '../../assets/images/logo.png';


// Components
import Title from '../../components/Title';


class LoginCode extends Component {
  constructor(props){
    super(props);
    this.state = {
      code: ''
    }
  }

  renderButton(){
    if(this.state.code.length < 3) return null;
    return(
      <TouchableHighlight
        onPress={ ()=> { this.props.dispatch(startHome()) } }
        style={ styles.btn }>

        <Text style={{ color: '#fff' }}>Ingresar</Text>

      </TouchableHighlight>
    )
  }

  render() {

    return (

       <View style={ styles.view }>

        <View style={ styles.container }>
          <Image source={ logo } resizeMode="contain" style={{ height: 100, width: 100 }} />

          <Title text="Rifas Blue" />

          <Text>Egresados 2017</Text>
        </View>
        

        <Title style={{ marginBottom: 40 }} text="Bienvenido !" size={ 40 } />


        <Title text="COLEGIO" size={ 25 } />

        <TextInput value={ this.state.code } onChange={ (code) => this.setState({ code }) } style={ styles.input } placeholder="School Code" />

        <Text style={{ textAlign: 'center' }} >
          Ingresa el codigo del colegio por el que quieres participar
        </Text>
          
        <View style={ styles.btnGroup }>
            {  this.renderButton() }
        </View>
      </View>
    );

  }

}

const styles = {
  view: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor : '#00796b',
    padding: 30,
    alignItems: 'center',
    // justifyContent : 'center',
  },
  container: {
    marginTop: 20, 
    marginBottom: 40,
    alignItems: 'center'
  },
  input : {
    height: 40, 
    padding: 5,
    paddingLeft: 15,
    borderColor: '#fff',
    borderRadius: 5, 
    borderWidth: 1
  },
  btn : {
    height: 40, 
    width: Dimensions.get('window').width - 60,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#004d40',
    borderRadius: 10
  }
};



function mapStateToProps(state) {
  return state.navigation;
}

export default connect(mapStateToProps)(LoginCode);
