import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Image, 
  TouchableOpacity
} from 'react-native';

//media
import left from '../assets/left.png';
import lupa from '../assets/lupa.png';
import opcao from '../assets/opcao.png';

export default function Main({navigation}) {
  function handMain(){
   navigation.navigate('Login');
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
         <Image style={styles.img_right} source={opcao} />
       </View>
      </View>

      {/*Body */}
      <View style={styles.view_body}>

        {/* Titulo */}
        <View style={styles.view_titulo}>

        </View>

        {/* Itens */}
        <View style={styles.view_itens}>
          
        </View>

      </View>
      {/* Foot */}
      <View style={styles.view_foot}>
        
      </View>

    </KeyboardAvoidingView>

  );
};


const styles = StyleSheet.create({

  containerbackground: {
    flex: 1,
    backgroundColor: "#CC0000",
    justifyContent: 'space-between',
  },

  container_head: {
    flexDirection: 'row',
    justifyContent: 'space-between' ,
    height:'8%',
  },

  head_right:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  

  head_left: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  view_body:{

  },

  view_titulo:{

  },

  view_itens:{

  },

  view_foot: {

  },


  img_right: {
    height: 20,
    width: 20,
    marginRight: 10,
  },

  text_head:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'normal',
    marginLeft: 10,
  },

  img_left: {
    height: 20,
    width: 20,
    marginTop: 5,
  },

});