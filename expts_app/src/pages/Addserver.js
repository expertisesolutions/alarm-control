import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Image,
  TextInput, TouchableOpacity

} from 'react-native';

//media
import logo from '../assets/logo.png';
//componets
import HeadBlue from './components/HeadBlue'

export default function Addserver({navigation}) {
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

      {/* Formularios*/}
      <View style={styles.viewForm}>
      <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Nome"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="IP/Host"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Login"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Confirma Password"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TouchableOpacity onPress={handMain} style={styles.button}>
          <Text style={styles.buttontext}>Add server</Text>
        </TouchableOpacity>
      </View>

      {/* Foot*/}
      <View style={styles.viewFoot}>
        <Text style={styles.foottext}>Não possui acesso ? <Text style={styles.foottextBold}>Solicitar</Text></Text>
      </View>


    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  containerbackground: {
    flex: 1,
    backgroundColor: "#F2F5F7",
    paddingHorizontal: 0,
    //paddingTop: Constant
  },
  
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    padding: 30,
  },

  viewForm: {
    justifyContent: 'center',
    alignItems: 'center',
    height:'53%',
    padding: 7,
  },
  viewFoot: {
    //justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
  },

  imgLogo: {
    height: 37,
    width: 37,
  },

  textHead:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'normal',
    marginLeft: 10,
  },

  input: {
    height: 42,
    alignSelf: 'stretch',
    backgroundColor: "#FFFF",
    borderWidth: 1,
    borderColor: '#F2F5F7',
    borderRadius: 4,
    marginTop: 12,
    marginHorizontal: 10,
    paddingHorizontal: 15,
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
    zIndex: 99,
  },

  buttontext: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'normal',
  },

  foottext: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'normal',
  },

  foottextBold: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold' ,
  },

});

