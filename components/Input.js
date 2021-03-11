import React from 'react';
import Colors from '../constants/colors'
import {View, TextInput, StyleSheet} from 'react-native';

const Input = props => {
  return(
    <TextInput {...props} style={{...styles.input,...props.style}}/>
  );
};

const styles = StyleSheet.create({
  input:{
    height:30,
    borderBottomWidth:1,
    borderColor:Colors.black,
    margin:20,
    fontSize:20
  }
});

export default Input