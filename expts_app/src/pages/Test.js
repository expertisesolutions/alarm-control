import React, { useState, useEffect } from 'react';

import { 
  Text, View, StyleSheet, StatusBar, Image, TextInput,
  TouchableOpacity, KeyboardAvoidingView, Platform
} from 'react-native';
  
  



//-----------------------------------------------------------------------

import hass from 'homeassistant-ws'




//---------------------------------



export default function Login({navigation}) {
  const [user, setUser] = useState('');


  async function main () {
    // Assuming hass running in `localhost`, under the default `8321` port:
    const client = await hass({
      token: 'my-secret-token'
    })
  }
  

  let teste = 'teste';

  function handloLogin(){

    //teste para acompanhar se o state foi salvo 
    console.log(user);

    navigation.navigate('Main');
  }
  
    return (
      <KeyboardAvoidingView 
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        style={styles.containerbackground}
        >
        <Text>{user}</Text>
        <StatusBar  barStyle="light-content" backgroundColor="#003399" />
        <View style={styles.container}>
          <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Login"
            placeholderTextColor="#999"
            style={styles.input}

            value={user}
            onChangeText={setUser}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Pass"
            placeholderTextColor="#999"
            style={styles.input}
          />
          <TouchableOpacity onPress={handloLogin} style={styles.button}>
            <Text style={styles.buttonText}>Test</Text>
          </TouchableOpacity>
        </View >
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