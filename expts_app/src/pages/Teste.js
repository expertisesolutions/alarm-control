import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,' +
    'Shake or press menu button for dev menu',
});


export default function Login({navigation}) {
   

    return (
          <View style={styles.container}>
            <Text style={styles.instructions}>
              dasdasd
            </Text>
          </View>
    );
  };


  
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },


    button: {
      height: 46,
      alignSelf: 'stretch',
      backgroundColor: "#003399",
      borderRadius: 4,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
  
    buttonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
    },





});