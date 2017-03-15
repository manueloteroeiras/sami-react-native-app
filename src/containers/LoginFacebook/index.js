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


import { startLogInCode } from '../../actions/navigationActions';


import logo from '../../assets/images/logo.png';


// Components
import Title from '../../components/Title';

class LoginFacebook extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }
  render() {

    return (

      <View style={ styles.view }>

        <Image source={ logo } resizeMode="contain" style={{ height: 100, width: 100 }} />

        <Title text="Rifas Blue" />

        <Text>
          Egresados 2017
        </Text>
          
        <View style={ styles.btnGroup }>
          <TouchableHighlight
            onPress={ ()=> { this.props.dispatch(startLogInCode()) } }
            style={ styles.btn }>

            <Text style={{ color: '#fff' }}>Login Facebook</Text>

          </TouchableHighlight>
          
        </View>
      </View>

    );

  }

}

const styles = {
  view: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor : '#3B5998',
    padding: 30,
    alignItems: 'center',
    justifyContent : 'center',
  },
  input : {
    height: 40, 
    borderColor: '#fff',
    borderRadius: 5, 
    borderWidth: 1
  },
  btn : {
    height: 40, 
    width: 150,
    marginTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#21345F',
    borderRadius: 10
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

function mapStateToProps(state) {
  return state.navigation;
}

export default connect(mapStateToProps)(LoginFacebook);
