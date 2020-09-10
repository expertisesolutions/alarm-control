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

  function Mainnext(){
    navigation.navigate('Mainnext');
   }
   
  //imagens menu de itens


  /*
  const data = ['foto02', 'b', 'c', 'd' ];
  const data2 = [{'nome': foto02}, {'nome': 26}, {'nome': 27}, {'nome': 28}]

  let test = []
  for(let i=0; i<data2.length; i++){
    test.push(
    //<Text>{data[0]}</Text>
    <Image source={foto02}/>
    )
  }

  console.log(data2.map(x => x.nome));
*/



  let rows = []
  for(let i=0; i<9; i++){
    rows.push(
      <View style={styles.view_subitem}>
        <Image
          key={foto02}
          source={foto03}
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
          <Text style={styles.text_titulo}>MENU GERAL</Text>
        </View>

        {/* Itens 
        <View style={styles.view_itens}>
          {rows}
        </View>
        */}

        {/* Itens */}
        <View style={styles.view_itens}>
          
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

         <View style={styles.view_subitem}>
          <Image
            key={foto10}
            source={foto10}
            style={styles.img_item}
          />
          <View style={styles.transparentView}>
            <View style={styles.textViewStyle}>
              <Text style={styles.textItem}>ILUMINAÇÃO</Text>
              <Text style={styles.subtextItem}>09 CENAS</Text>
            </View>
          </View>
         </View>

         <View style={styles.view_subitem}>
          <Image
            key={foto03}
            source={foto03}
            style={styles.img_item}
          />
          <View style={styles.transparentView}>
            <View style={styles.textViewStyle}>
              <Text style={styles.textItem}>CLIMA</Text>
              <Text style={styles.subtextItem}>17 CENAS</Text>
            </View>
          </View>
         </View>

         <View style={styles.view_subitem}>
          <Image
            key={foto04}
            source={foto04}
            style={styles.img_item}
          />
          <View style={styles.transparentView}>
            <View style={styles.textViewStyle}>
              <Text style={styles.textItem}>CAFÉ</Text>
              <Text style={styles.subtextItem}>03 CENAS</Text>
            </View>
          </View>
         </View>

         <View style={styles.view_subitem}>
          <Image
            key={foto05}
            source={foto05}
            style={styles.img_item}
          />
          <View style={styles.transparentView}>
            <View style={styles.textViewStyle}>
              <Text style={styles.textItem}>FECHADURAS</Text>
              <Text style={styles.subtextItem}>08 CENAS</Text>
            </View>
          </View>
         </View>

         <View style={styles.view_subitem}>
          <Image
            key={foto06}
            source={foto06}
            style={styles.img_item}
          />
          <View style={styles.transparentView}>
            <View style={styles.textViewStyle}>
              <Text style={styles.textItem}>MIDIA</Text>
              <Text style={styles.subtextItem}>05 CENAS</Text>
            </View>
          </View>
         </View>

         <View style={styles.view_subitem}>
          <Image
            key={foto07}
            source={foto07}
            style={styles.img_item}
          />
          <View style={styles.transparentView}>
            <View style={styles.textViewStyle}>
              <Text style={styles.textItem}>PET</Text>
              <Text style={styles.subtextItem}>02 CENAS</Text>
            </View>
          </View>
         </View>

         <View style={styles.view_subitem}>
          <Image
            key={foto08}
            source={foto08}
            style={styles.img_item}
          />
          <View style={styles.transparentView}>
            <View style={styles.textViewStyle}>
              <Text style={styles.textItem}>JARDIM</Text>
              <Text style={styles.subtextItem}>03 CENAS</Text>
            </View>
          </View>
         </View>

         <View style={styles.view_subitem}>
          <Image
            key={foto09}
            source={foto09}
            style={styles.img_item}
          />
          <View style={styles.transparentView}>
            <View style={styles.textViewStyle}>
              <Text style={styles.textItem}>SERVIÇÕS</Text>
              <Text style={styles.subtextItem}>10 CENAS</Text>
            </View>
          </View>
         </View>

        </View>

      </View>

      {/* Foot */}
      <View style={styles.viewFoot}>
          <Text style={styles.textFoot}>0 Informações</Text>
        <View style={styles.viewTrasparentFoot}>
          <View style={styles.viewtextFootNext}>
            <TouchableOpacity onPress={Mainnext}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },

  view_itens:{
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

  view_subitem: {
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

  text_titulo:{
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