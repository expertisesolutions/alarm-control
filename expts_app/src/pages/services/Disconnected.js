import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Image,
  TouchableOpacity

} from 'react-native';

//media
import left from '../../assets/left.png';
import no_network from '../../assets/disconnected.svg';
import lupa from '../../assets/lupa.png';
import opcao from '../../assets/opcao.png';

export default function Disconnected({navigation}) {
  function handMain(){
   navigation.navigate('Telas');
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

      {/* Formularios*/}
      <View style={styles.viewBody}>
        <Image style={styles.imageBody} source={no_network}/>
        <Text>Desconectado</Text>
      </View>

      {/* Foot*/}
    
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

  viewBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

  imageBody: {
    height: 37,
    width: 37,
    color: '#000',
  },
  
});

//justifyContent: 'center',
//    alignItems: 'center',
//    padding: 30,