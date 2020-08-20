import React, { useState } from 'react';

import { 
  Text, View, StyleSheet, StatusBar, Image, TextInput,
  TouchableOpacity, KeyboardAvoidingView, Platform
} from 'react-native';

// ================================================









//====================================================





  
export default function Testoauth({navigation}) {
  const [user, setUser] = useState('');

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
        <StatusBar  barStyle="light-content" backgroundColor="#54ad" />
        <View style={styles.container}>
          <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Test"
            placeholderTextColor="#999"
            style={styles.input}

            value={user}
            onChangeText={setUser}
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
      backgroundColor: "#54ad",
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
      backgroundColor: "#54ad",
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