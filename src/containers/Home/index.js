import {
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from  '../../components/NavBar';
import Event from '../../components/Event';
import CountCoins from '../../components/CountCoins';


import logo from '../../assets/images/logo.png'

class Home extends Component {

  render() {

    return (

      <View style={ styles.view }>

        <NavBar
          expanded
          logo={ logo }
          schoolName={ 'Bede\'s Grammar School' } 
          customName={ 'La banda 14' } />

        <Event eventName="Porto seguro" eventDayEnd=' 22 de Noviembre' eventPercentaje={ '45' } />

        <CountCoins coins={ 23 } />

        <TouchableHighlight style={ styles.btn } onPress={ ()=> alert("Playing") }>
          <Text style={{ color: '#455a64', fontWeight: '800' }} selectionColor="#cecece">JUGAR</Text>
        </TouchableHighlight>
          
      </View>

    );

  }

}

const styles = {
  view: {
    flex: 1,
    height: Dimensions.get('window').height,
    paddingTop: 25,
    width: Dimensions.get('window').width,
    backgroundColor : '#fafafa'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    padding: 30
  },
  btn : {
    height: 40, 
    width: 150,
    marginTop: 50,
    alignItems: 'center',
    borderColor : '#455a64',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
    alignSelf: 'center'
  },
};

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(Home);
