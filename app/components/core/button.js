import React, {Component} from 'react';
import {TouchableOpacity,View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = {
  buttonContent:{
    flexDirection:'row',
    alignItems:'center',
    paddingTop:5
  },
  icon:{
    backgroundColor:'transparent',
    marginRight:5
  },
  facebookButton:{
    backgroundColor:'#3b5998'
  },
  facebookButtonText:{
    color:'#fff',
  }
}

export default class Button extends Component {
  constructor(props) {
    super();
  }
  render(){
    let icon = this.props.iconName?
    <Icon name={this.props.iconName}
     style={this.props.iconColor?styles={color:this.props.iconColor}:styles.icon}
     size={24}color="#4F8EF7" />:null

    return(
      <TouchableOpacity style={styles.facebookButton}>
      <View style={styles.buttonContent}>
        {icon}
        <Text style={[styles.facebookButtonText,styles.text]}>{this.props.text}</Text>
      </View>
      </TouchableOpacity>
    )
  }
}
