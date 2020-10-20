import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Image,
  TextInput, TouchableOpacity

} from 'react-native';

//media
import logo from '../assets/logo.png';
//componets
import HeadBlue from './components/HeadBlue'

export default function Sensores({navigation}) {
  function handMain(){
   navigation.navigate('Telas');
  }
  
   
  return (
    <KeyboardAvoidingView 
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        style={styles.containerbackground}
    >
      {/* Status bar */}
      <StatusBar  barStyle="light-content" backgroundColor="#7C7B7B" />

      {/* HEAD */}
        <HeadBlue  funHead={navigation} />

      {/* BODY */}

      <View style={styles.containerLogo}>
       <Image style={styles.imgLogo} source={logo} />
      </View>

      <View>
        <Text>teste</Text>
      </View>



    </KeyboardAvoidingView>
    );
  };
  
  
  const styles = StyleSheet.create({

    containerbackground: {
      flex: 1,
      //backgroundColor: "#F2F5F7",
      backgroundColor: "#FFF",
      paddingHorizontal: 0,
      justifyContent: 'space-between' ,
      //paddingTop: Constant
    },

    containerLogo: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '30%',
      padding: 30,
    },

    imgLogo: {
      height: 37,
      width: 37,
    },

  })