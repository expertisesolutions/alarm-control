import React from 'react';
import { 
  Text, View, StyleSheet, StatusBar, Image, TextInput,
  TouchableOpacity, KeyboardAvoidingView, Platform
} from 'react-native';

//media
import logo from '../../assets/logo.png'
import server from '../../assets/server.png';

export default function Register({navigation}) {
  function handloLogin(){
   navigation.navigate('Telas');
  }

  

  return (
  <KeyboardAvoidingView 
    behavior="padding"
    enabled={Platform.OS === 'ios'}
    style={styles.containerbackground}
    >
    <StatusBar  barStyle="light-content" backgroundColor="#003399" />
    <View style={styles.container}>
      <Image source={logo} />
    </View>
    <View style={styles.container}>
    <Image source={server} />
     <TouchableOpacity onPress={handloLogin} style={styles.button}>
        <Text style={styles.buttonText}></Text>
      </TouchableOpacity>
    </View >
    <View style={styles.foot}>
    </View>
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  headbar:{
    backgroundColor: "#003399",
  },

  containerbackground: {
    flex: 1,
    backgroundColor: "#F2F5F7",
    height: 'auto',
  },

  container: {
    flex: 1,
    backgroundColor: "#F2F5F7",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: "#FFFF",
    borderWidth: 1,
    borderColor: '#F2F5F7',
    borderRadius: 4,
    marginTop: 20,
    marginHorizontal: 10,
    paddingHorizontal: 15,
  },

  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: "#6FCF97",
    borderRadius: 4,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  buttonOff: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: "#E0E0E0",
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

  foot: {
    flex: 1,
    backgroundColor: "#003399",
    position: 'relative',
    height: 20,
    left: 0,
    top: 175,
  },
});