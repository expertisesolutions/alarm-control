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
   navigation.navigate('Ativaalarm');
  }

  //imagens menu de itens

  const data = ['foto02', 'b', 'c', 'd' ];
  const data2 = [{'nome': 25}, {'nome': 26}, {'nome': 27}, {'nome': 28}]

  let test = []
  for(let i=0; i<data.length; i++){
    test.push(
    //<Text>{data[0]}</Text>
    <Image source={foto02}/>
    //<Image source={data[0]}/>
    //<Image source={{data[0]}}/>
    )
  }

  console.log(data2.map(x => x.nome));


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
          <View style={styles.textViewStyle}>
            <Text style={styles.textItem}>ALARME</Text>
            <Text style={styles.subtextItem}>17 CENAS</Text>
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
          {test}
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
    height:'10%',
  },

  view_itens:{
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    padding: 7,
  },   

  view_subitem: {
    height: 120,
    width: 120,
    marginTop: 7,
    backgroundColor: '#000',
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
    position: 'relative',
    height: 120,
    width: 120,
    opacity: 0.6,
  },
/*
  backgroundImage: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',  
  },
*/
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

});