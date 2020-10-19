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
import foto03 from '../assets/main/foto03.jpg';
import foto04 from '../assets/main/foto04.jpg';
import foto05 from '../assets/main/foto05.jpg';
import foto06 from '../assets/main/foto06.jpg';
import foto07 from '../assets/main/foto07.jpg';
import foto08 from '../assets/main/foto08.jpg';
import foto09 from '../assets/main/foto09.jpg';
import foto10 from '../assets/main/foto10.jpg';

export default function Main({navigation}) {
  function handMain(){
   navigation.navigate('Telas');
  }

  function Main(){
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
      <View style={styles.containerHead}>
       <View style={styles.headLeft}>
         <TouchableOpacity onPress={handMain}>
          <Image  style={styles.imgLeft} source={left} />
         </TouchableOpacity>
         <Text style={styles.textHead}> Adicionar Server</Text>
       </View>
       <View style={styles.headRight}> 
         <Image style={styles.imgHight} source={lupa} />
         <TouchableOpacity onPress={OpenMenu}>
           <Image style={styles.imgHight} source={opcao} />
         </TouchableOpacity>
       </View>
      </View>

      {/*Body */}
      <View style={styles.view_body}>

        {/* Titulo */}
        <View style={styles.viewTitulo}>
          <Text style={styles.textTitulo}>MENU GERAL</Text>
        </View>

      </View>

      {/* Foot */}
      <View style={styles.viewFoot}>
          <Text style={styles.textFoot}>0 Informações</Text>
        <View style={styles.viewTrasparentFoot}>
          <View style={styles.viewtextFootNext}>
            <TouchableOpacity onPress={Main}>
             <Text style={styles.textFootNext}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </KeyboardAvoidingView>

  );
};


//<View style={styles.viewTextFoot}></View>

const styles = StyleSheet.create({


  containerbackground: {
    flex: 1,
    justifyContent: 'space-between',
  },

  containerHead: {
    flexDirection: 'row',
    justifyContent: 'space-between' ,
    backgroundColor: "#CC0000",
    height:'8%',
  },

  headRight:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  

  headLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  view_body:{
    backgroundColor: "#CC0000",
    height: "85%",
  },

  viewTitulo:{
    height:'10%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewItens:{
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    padding: 7,
  },   

  viewFoot: {
    flex: 1,
    backgroundColor: "#3A3B3C",
    height: "7%",
    justifyContent:'center',
    alignItems: 'center',
  },


  viewTrasparentFoot:{
    backgroundColor: 'transparent',
    position: 'absolute',
    //alignSelf: 'stretch',
  },

  viewtextFootNext:{
    width: 350,  // Resolver este problema 
    justifyContent:'flex-end',
    alignItems: 'flex-end',
  },

  viewSubitem: {
    height: 120,
    width: 120,
    marginTop: 7,
    backgroundColor: '#000',
  },
  
  transparentView: {
    backgroundColor: 'transparent',
    position: 'absolute',
  },


  textViewStyle: {
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },


  imgHight: {
    height: 20,
    width: 20,
    marginRight: 10,
  },

  textHead:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'normal',
    marginLeft: 10,
  },

  imgLeft: {
    height: 20,
    width: 20,
    marginTop: 5,
  },

  imgItem: {
    flex: 1,
    position: 'relative',
    height: 120,
    width: 120,
    opacity: 0.6,
  },

  textItem:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
 
  subtextItem:{
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'normal',
    marginTop: 20,
    marginBottom: 15,
  },

  textTitulo:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  textFoot:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'normal',
  },
  
  textFootNext:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

});