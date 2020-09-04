import React from 'react';
import { 
  Text, View, StyleSheet, StatusBar, Image, TextInput,
  TouchableOpacity, KeyboardAvoidingView, Platform
} from 'react-native';

//media
import logo from '../assets/logo.png';
import server from '../assets/server.png';
import serverOff from '../assets/serverOff.png';

export default function Menutest({navigation}) {


  function testedeconexao(){
   navigation.navigate('Test');
  }

  function paginaAdd(){
    navigation.navigate('Addserver');
  }

  function paginaAtiva(){
    navigation.navigate('Ativaalarm');
  }

  function paginaMain(){
    navigation.navigate('Main');
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
      <View style={styles.containerServ}>
        <Image source={server} style={styles.iconserv}/>
        <TouchableOpacity onPress={testedeconexao} style={styles.button}>
          <Text style={styles.buttonText}>Teste Home assitent</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.containerServ}>
      <Image source={server} style={styles.iconserv}/>
      <TouchableOpacity onPress={paginaAdd} style={styles.button}>
          <Text style={styles.buttonText}>Add Server</Text>
      </TouchableOpacity>
    </View>

      
    <View style={styles.containerServ}>
      <Image source={server} style={styles.iconserv}/>
      <TouchableOpacity onPress={paginaAtiva} style={styles.button}>
        <Text style={styles.buttonText}>Armar alarme</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.containerServ}>
      <Image source={serverOff} style={styles.iconserv}/>
      <TouchableOpacity onPress={paginaMain} style={styles.buttonOff}>
        <Text style={styles.buttonText}> ---- </Text>
      </TouchableOpacity>
    </View>

    <View style={styles.containerServ}>
      <Image source={serverOff} style={styles.iconserv}/>
      <TouchableOpacity onPress={paginaMain} style={styles.buttonOff}>
        <Text style={styles.buttonText}> ---- </Text>
      </TouchableOpacity>
    </View>
    
    </View >
      <View style={styles.foot}>
    </View>
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({

  containerbackground: {
    flex: 1,
    backgroundColor: "#F2F5F7",
    justifyContent:'space-between',
  },

  container: {
    backgroundColor: "#F2F5F7",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  containerServ: {
    flexDirection: 'row',
    backgroundColor: "#F2F5F7",
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '80%',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  iconserv: {
    alignSelf: 'stretch',
    marginTop: 25,
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
    width: '80%',
  },

  foot: {
    backgroundColor: "#003399",
    height: "8%",
  },
});