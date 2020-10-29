import React from  'react';
import {
  View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet, 
  StatusBar, Image, TextInput
} from  'react-native';

import hass from 'homeassistant-ws'
//import configHass from '../secrets/Hasss'
//import api from '../services/api';

//media
import Left from '../assets/leftBlack.png';
import Logo from '../assets/logo.png';
import Main from './Mainnext';

export default function SolicitaTeste({navigation}){

  function Return(){
    navigation.navigate('Telas');
  }

  async function main () {
    // Assuming hass running in `localhost`, under the default `8321` port:
    const client = await hass({
      host: '192.168.0.29',
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI2Yjk4Y2ZhYzRkN2E0YjJhOWM0M2Y4OGM2YTk0OWQzOCIsImlhdCI6MTU5NzY5MjQ1MCwiZXhwIjoxOTEzMDUyNDUwfQ.0_uZvj7-7RZSZGpNq7BygRdX6UjXonnFQCO6CudQJnw'
    });

    console.log(await client.getStates());

    console.log('----------------------------------------------------------');

   // console.log(await client.callService('spotify_music', 'media_player.play_media', { entity_id: 'media_player.spotify' }));
    console.log(await client.callService('media_player.play_media', '', { entity_id: 'media_player.spotify_ricardo_campos'}));

    //settest('teste debug');
  }

  function Teste(){
    main()
  }

  return(
    <KeyboardAvoidingView 
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.containerbackground}
      >
      {/* Status bar */}
      <StatusBar  barStyle="light-content" backgroundColor="#7C7B7B" />

      {/* head*/}
      <View style={styles.containerHead}>
        <View style={styles.headLeft}>
          <TouchableOpacity onPress={Return}>
            <Image  style={styles.imgLeft} source={Left} />
          </TouchableOpacity>
          <Text style={styles.textHead}>Home</Text>
        </View>
      </View>

      {/*  */}
      <View>

        {/* logo  */}
        <View style={styles.containerLogo}>
          <Image  style={styles.imgLogo} source={Logo} />
        </View>
        {/* body  */}
        <View style={styles.viewbody}>
          <Text style={styles.textTitulo}> . . .</Text>
          <View style={styles.viewInstru}>
            <Text style={styles.textoInstru}>
              ...
            </Text>
          </View>
          <View style={styles.viewImput}> 
      
            
          </View>
          <TouchableOpacity onPress={Teste} style={styles.button}>
            <Text style={styles.buttontext}>Buscar</Text>
          </TouchableOpacity>
        </View>
      </View>

    </KeyboardAvoidingView>
  )};

const styles = StyleSheet.create({

    containerbackground: {
      flex: 1,
      backgroundColor: "#F2F5F7",
      height: 'auto',
    },

    containerHead: {
      flexDirection: 'row',
      justifyContent: 'space-between' ,
      height:'7%',
      alignItems: 'center',
    },
    
    headLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
  
    imgLeft: {
      height: 20,
      width: 20,
      marginTop: 5,
    },

    textHead:{
      color: '#000',
      fontSize: 16,
      fontWeight: 'normal',
      marginLeft: 10,
    },

    containerLogo: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '32%',
      padding: 30,
    },

    viewbody: {
      padding: '14%',
      alignItems: 'center',
      height: '53%',
    },
    
    imgLogo: {
      height: 37,
      width: 37,
    },

    textTitulo: {
      color: '#003399',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: '5%',
    },

    viewInstru:{
      marginTop: '5%',
    },

    textoInstru:{
      textAlign: 'center',
      color: '#878585',
      fontSize: 14,
      fontWeight: 'normal',
    },

    viewImput:{
      alignSelf: 'stretch',
      marginTop: '12%',
      flexDirection: 'row',
      justifyContent: 'space-evenly' ,
      alignItems:'center',
      height: 42,
    },

    button: {
      marginTop: '12%',
      height: 42,
      backgroundColor: '#003399',
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
    },

    buttontext: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
    },

    imputDdd: {
      fontSize: 16,
      height: 42,
      width: '16%',
      borderBottomColor: '#000',
      borderBottomWidth: 1,
    },

    imputNumero: {
      fontSize: 16,
      height: 42,
      width: '80%',
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      marginLeft: 18,
    },
  });

