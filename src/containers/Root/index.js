import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';


// Components
import Home from '../Home';
import LoginFacebook from '../LoginFacebook';
import LoginCode from '../LoginCode';

class Root extends Component {

  renderScene() {

    let { scene } = this.props;

    switch (scene) {
      case 'login-facebook': 
        return <LoginFacebook />;

      case 'login-code': 
        return <LoginCode />;
      
      case 'home': 
        return <Home />;
        
      default: 
        return null;
    }

  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderScene() }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  }
});

function mapStateToProps(state) {
  return state.navigation;
}

export default connect(mapStateToProps)(Root);
