import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Image

} from 'react-native';

//media
import left from '../assets/left.png' ;
import logo from '../assets/logo.png';


export default function Addserver({navigation}) {
  function handloLogin(){
   navigation.navigate('Main');
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
      <View style={styles.container_head}>
       <Image style={styles.img_left} source={left} />
       <Text style={styles.text_head}> Adicionar Server</Text>
      </View>
      
      {/* BODY */}
      <View style={styles.container_logo}>
       <Image style={styles.img_logo} source={logo} />
      </View>


    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  containerbackground: {
    flex: 1,
    //backgroundColor: "#F2F5F7",
    paddingHorizontal: 0,
    //paddingTop: Constant
  },

  container_head: {
    flexDirection: 'row',
   //justifyContent: 'center' ,
    backgroundColor: "#003399",
    height: 50,
    alignItems: 'center',
    padding: 10,
  },

  container_logo: {
    flex: 1,
    backgroundColor: "#F2F5F7",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  img_left: {
    height: 20,
    width: 20,
    marginTop: 5,
  },

  img_logo: {
    height: 37,
    width: 37,
  },

  text_head:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  }

});

//justifyContent: 'center',
//    alignItems: 'center',
//    padding: 30,