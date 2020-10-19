import React from  'react';
import {
  View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet, 
  StatusBar, Image, TextInput
} from  'react-native';

//media
import Left from '../../assets/leftBlack.png';
import Logo from '../../assets/logo.png';

export default function Sendcodemail({navigation}){

  function Return(){
    navigation.navigate('Telas');
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
          <Text style={styles.textTitulo}>Verifique seu E-mail</Text>
          <View style={styles.viewInstru}>
            <Text style={styles.textoInstru}>
              Por favor,informe seu E-mail no campo abaixo, 
              para que possamos enviar um codigo de verificação.
            </Text>
          </View>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="seu_email@email.com.br"
            placeholderTextColor="#999"
            style={styles.imput}
          />
          <TouchableOpacity onPress={Return} style={styles.button}>
            <Text style={styles.buttontext}>Continune</Text>
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

    imput: {
      height: 42,
      alignSelf: 'stretch',
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      marginTop: '12%',
      marginHorizontal: 10,
      paddingHorizontal: 2,
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

  });

