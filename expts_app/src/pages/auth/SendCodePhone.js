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
    navigation.navigate('Login');
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
              Por favor, informe seu telefone com código de área,
              para que possamos enviar um código de verificação.
            </Text>
          </View>
          <View style={styles.viewImput}> 
            <Text style={styles.imputText}>+55</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="00"
              placeholderTextColor="#999"
              style={styles.imputDdd}
            />
            <Text style={styles.imputText}>-</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="99999-9999"
              placeholderTextColor="#999"
              style={styles.imputNumero}
            />
          </View>
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

    imputText: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'normal',
    },

    imputDdd: {
      fontSize: 16,
      height: 42,
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      //marginHorizontal: 10,
      //paddingHorizontal: 2,
    },

    imputNumero: {
      fontSize: 16,
      height: 42,
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      //marginHorizontal: 10,
      //paddingHorizontal: 2,
    },
  });

