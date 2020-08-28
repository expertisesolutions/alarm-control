import React, { useState, useEffect } from 'react';

import { 
  Text, View, StyleSheet, StatusBar, Image, TextInput,
  TouchableOpacity, KeyboardAvoidingView, Platform
} from 'react-native';
  
  

//-----------------------------------------------------------------------

import hass from 'homeassistant-ws'
//import configHass from '../secrets/Hasss'
import api from '../services/api';

//---------------------------------


export default function Login({navigation}) {
  const [user, setUser] = useState('');
  const [teste, settest] = useState('');

  
  async function main () {
    // Assuming hass running in `localhost`, under the default `8321` port:
    const client = await hass({
      host: '192.168.1.110',
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI2Yjk4Y2ZhYzRkN2E0YjJhOWM0M2Y4OGM2YTk0OWQzOCIsImlhdCI6MTU5NzY5MjQ1MCwiZXhwIjoxOTEzMDUyNDUwfQ.0_uZvj7-7RZSZGpNq7BygRdX6UjXonnFQCO6CudQJnw'
    });

    

    console.log(await client.getStates());

    console.log('----------------------------------------------------------');

   // console.log(await client.callService('spotify_music', 'media_player.play_media', { entity_id: 'media_player.spotify' }));
    console.log(await client.callService('media_player.play_media', '', { entity_id: 'media_player.spotify_ricardo_campos'}));

    //settest('teste debug');
  }

  main();
  
  function handloLogin(){

    //const reponse = await api.post('');
    //const { } = Response.data;
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
        <Text>{}</Text>
        <StatusBar  barStyle="light-content" backgroundColor="#003399" />
        <View style={styles.container}>
          <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="dispositivo"
            placeholderTextColor="#999"
            style={styles.input}

            value={user}
            onChangeText={setUser}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="entity"
            placeholderTextColor="#999"
            style={styles.input}
          />
          <TouchableOpacity onPress={handloLogin} style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
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