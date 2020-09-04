import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Image, 
  TouchableOpacity
} from 'react-native';


//media
import left from '../assets/left.png';
import lupa from '../assets/lupa.png';
import opcao from '../assets/opcao.png';
//imagens menu
import foto02 from '../assets/main/foto02.jpg';

export default function Main({navigation}) {
  function handMain(){
   navigation.navigate('Login');
  }

  let rows = []
  for(let i=0; i<9; i++){
    rows.push(
      <View style={styles.view_subitem}>
        <Image
          key={foto02}
          source={foto02}
          style={styles.img_item}
        />
        <View style={styles.transparentView}>
          <View style={styles.logoViewStyle}>
            <Text>cas</Text>
          </View>
        </View>

      </View>
    )
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
          <Text>MENU GERAL</Text>
        </View>

        {/* Itens */}
        <View 
          style={styles.view_itens}
        >
          {rows}
        </View>

      </View>

      {/* Foot */}
      <View style={styles.view_foot}>
        <Text>0 Informações</Text>
        <View><Text>NEXT</Text></View>
      </View>

    </KeyboardAvoidingView>

  );
};


const styles = StyleSheet.create({


  containerbackground: {
    flex: 1,
    justifyContent: 'space-between',
  },

  container_head: {
    flexDirection: 'row',
    justifyContent: 'space-between' ,
    backgroundColor: "#CC0000",
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
    backgroundColor: "#CC0000",
    height: "85%",
  },

  view_titulo:{

  },

  view_itens:{
    flex: 3,
    flexDirection: 'row',
    padding: 5,
  },   

  view_subitem: {
    
    height: 120,
    width: 120,
  },

  view_foot: {
    backgroundColor: "#3A3B3C",
    height: "7%",
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

  img_item: {
    flex: 1,
    position: 'relative'
  },

  backgroundImage: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',  
  },

  transparentView: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    position: 'absolute'
  },

  logoViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250
  },

});