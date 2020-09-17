import React, {useState} from  'react';
import {
  View, Text, TouchableOpacity, KeyboardAvoidingView, StyleSheet, 
  StatusBar, Image, TextInput
} from  'react-native';

//media
import Left from '../../assets/leftBlack.png';
import Logo from '../../assets/logo.png';

export default function Sendcodemail({navigation}){
  let emFoco = true;
  let foraFoco = false;
  const [text, setText] = React.useState(styles.imputNumero2);
  const [refDois, setRefDois] = React.useState();
  const [refTres, setRefTres] = React.useState();
  const [refQuatro, setRefQuatro] = React.useState();

  function Return(){
    navigation.navigate('Telas');
  };
  function NextInput(){
    setRefDois(emFoco);
    console.log('dfsad')

  }
  function NextInputDois(){
    setText(styles.imputNumero);
    setRefUm(foraFoco);
    setRefDois(emFoco);
    console.log('dfsad')
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
          <Text style={styles.textTitulo}>Confirme o codigo</Text>
          <View style={styles.viewInstru}>
            <Text style={styles.textoInstru}>
              Acesse seu E-mail e informa o código recebido para validação de seu cadastro
            </Text>
          </View>
          <View style={styles.viewImput}> 
            <TextInput
              style={styles.imputNumeroUm}
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={1}
              keyboardType="number-pad"
              onChangeText={text => NextInput() }
            />
            <TextInput
              autoFocus = {refDois}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.imputNumero}
              maxLength={1}
              keyboardType="number-pad"
            />
            <TextInput
              autoFocus = {refTres}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.imputNumero}
              maxLength={1}
              keyboardType="number-pad"
            />
            <TextInput
              autoFocus = {refQuatro}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.imputNumero}
              maxLength={1}
              keyboardType="number-pad"
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
      justifyContent: 'center' ,
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

    imputNumeroUm: {
      fontSize: 16,
      height: 42,
      width: 32,
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      //marginLeft: 0,
    },

    imputNumero: {
      fontSize: 16,
      height: 42,
      width: 32,
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      marginLeft: 18,
    },

    imputNumero2: {
      fontSize: 16,
      height: 42,
      width: 32,
      backgroundColor: '#54d',
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      marginLeft: 18,
    },
     
    textinput_focused: {
      backgroundColor: '#F543'
    },
  
  });

