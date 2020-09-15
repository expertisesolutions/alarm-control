import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Image,
  TextInput, TouchableOpacity

} from 'react-native';

//media
import left from '../assets/left.png';
import logo from '../assets/logo.png';
import lupa from '../assets/lupa.png';
import opcao from '../assets/opcao.png';

export default function Addserver({navigation}) {
  function handMain(){
   navigation.navigate('Main');
  }

  function OpenMenu(){
    navigation.openDrawer();
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
         <TouchableOpacity onPress={handMain}>
          <Image  style={styles.img_left} source={left} />
         </TouchableOpacity>
         <Text style={styles.text_head}> Adicionar Server</Text>
       </View>
       <View style={styles.head_right}> 
         <Image style={styles.img_right} source={lupa} />
         <TouchableOpacity onPress={OpenMenu}>
           <Image style={styles.img_right} source={opcao} />
         </TouchableOpacity>
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
          placeholder="IP/Host"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Login"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Confirma Password"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TouchableOpacity onPress={handMain} style={styles.button}>
          <Text style={styles.buttontext}>Add server</Text>
        </TouchableOpacity>
      </View>

      {/* Foot*/}
      <View style={styles.view_foot}>
        <Text style={styles.foottext}>Não possui acesso ? <Text style={styles.foottextBold}>Solicitar</Text></Text>
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
    height: '30%',
    padding: 30,
  },

  view_form: {
    justifyContent: 'center',
    alignItems: 'center',
    height:'53%',
    padding: 7,
  },
  view_foot: {
    //justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
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
    fontWeight: 'normal',
    marginLeft: 10,
  },

  input: {
    height: 42,
    alignSelf: 'stretch',
    backgroundColor: "#FFFF",
    borderWidth: 1,
    borderColor: '#F2F5F7',
    borderRadius: 4,
    marginTop: 12,
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

  buttontext: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'normal',
  },

  foottext: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'normal',
  },

  foottextBold: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold' ,
  },


});

//justifyContent: 'center',
//    alignItems: 'center',
//    padding: 30,