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

export default function Ativaalarm({navigation}) {
  function handMain(){
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

  text_head:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'normal',
    marginLeft: 10,
  },

  head_right:{
    flexDirection: 'row',
    padding: 10,
  },

  img_right: {
    height: 20,
    width: 20,
    marginRight: 10,
  },

  img_left: {
    height: 20,
    width: 20,
    marginTop: 5,
  },

});
