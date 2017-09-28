import React, {Component} from 'react';
import {StyleSheet, View,Image, Text, TouchableOpacity} from 'react-native';
import Button from './core/button.js';

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:null,
    height:null,
  },
  content:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  }
});

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loginStatus, facebookLogin, gmailLogin } = this.props;

    return (
        <Image source={require('../../resources/images/launchbackground.jpg')}
        style={styles.container}
        >
          <View style={styles.content}>
            <Text>Eat what you were born to eat</Text>
            <Button text="Login" iconName='logo-facebook'/>
            <Button text="Maybe Later" type="transparent" onClick={gmailLogin}/>
          </View>
        </Image>
    );
  }
}
