import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Image,
  TextInput

} from 'react-native';

//media
import left from '../assets/left.png';
import logo from '../assets/logo.png';
import lupa from '../assets/lupa.png';
import opcao from '../assets/opcao.png';

export default function Addserver({navigation}) {
  function handloLogin(){
   navigation.navigate('Main');
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
      <View style={styles.container_head}>
       <View style={styles.head_left}>
         <Image style={styles.img_left} source={left} />
         <Text style={styles.text_head}> Adicionar Server</Text>
       </View>
       <View style={styles.head_right}> 
         <Image style={styles.img_right} source={lupa} />
         <Image style={styles.img_right} source={opcao} />
       </View>
      </View>
      
      {/* BODY */}
      <View style={styles.container_logo}>
       <Image style={styles.img_logo} source={logo} />
      </View>

      {/* Formularios*/}
      <View style={styles.view_form}>
      <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Nome"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Nome"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Nome"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Nome"
          placeholderTextColor="#999"
          style={styles.input}
        />
        
      </View>

      {/* Foot*/}
      <View style={styles.view_foot}>
        <Text>Foot</Text>
      </View>


    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  containerbackground: {
    flex: 1,
    backgroundColor: "#F2F5F7",
    paddingHorizontal: 0,
    //paddingTop: Constant
  },

  container_head: {
    flexDirection: 'row',
    justifyContent: 'space-between' ,
    backgroundColor: "#003399",
    height:'7%',
    alignItems: 'center',
  },
  
  head_left: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  head_right:{
    flexDirection: 'row',
    padding: 10,
  },

  container_logo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '35%',
    padding: 30,
  },

  view_form: {
    justifyContent: 'center',
    alignItems: 'center',
    height:'50%',
    padding: 10,
  },
  view_foot: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '8%',
    padding: 30,
  },

  img_left: {
    height: 20,
    width: 20,
    marginTop: 5,
  },

  img_right: {
    height: 20,
    width: 20,
    marginRight: 10,
  },

  img_logo: {
    height: 37,
    width: 37,
  },

  text_head:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
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

});

//justifyContent: 'center',
//    alignItems: 'center',
//    padding: 30,