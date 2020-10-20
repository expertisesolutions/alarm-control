import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Image,
  TextInput, TouchableOpacity

} from 'react-native';

//media
import logo from '../assets/logo.png';
//componets
import HeadBlue from './components/HeadBlue'

export default function Sensores({navigation}) {
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

      <View style={styles.containerLogo} >
       <Image style={styles.imgLogo} source={logo} />
      </View>

      <View style={styles.containerBody} >
        

        <View style={styles.containerSensor} > 
          <View style={styles.viewSensor} >
            <Text style={styles.textName} >Nome do Sensor</Text>
            <Text style={styles.textType} >Dados do Sensor</Text>
          </View>
          <Image style={styles.imgLogo} source={logo} />
        </View>

      </View>

      <View style={styles.containerFoot}>
        <Text>teste</Text>
      </View>

    </KeyboardAvoidingView>
    );
  };
  
  
  const styles = StyleSheet.create({

    containerbackground: {
      flex: 1,
      //backgroundColor: "#F2F5F7",
      backgroundColor: "#FFF",
      paddingHorizontal: 0,
      justifyContent: 'space-between' ,
      //paddingTop: Constant
    },

    containerLogo: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '15%',
      padding: 30,
      backgroundColor: '#1A4',
    },

    containerBody: {
      height: '65%',
      backgroundColor: '#FA4',
    },

    containerSensor:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    containerFoot: {
      height: '13%',
    },

    viewSensor:{
      marginTop: 5,
      marginLeft: '5%',
      width: '60%',
    },

    imgLogo: {
      height: 37,
      width: 37,
    },

    textName:{
      color: '#000',
      fontSize: 15,
      fontWeight: 'bold',
    },
    textType: {
      color: '#878585',
      fontSize: 14,
      fontWeight: 'normal',
    },

  })