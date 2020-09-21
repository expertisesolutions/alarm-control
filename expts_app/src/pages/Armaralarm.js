import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Image,
  TouchableOpacity

} from 'react-native';

//media
import left from '../assets/left.png';
import home from '../assets/home.png';
import logo from '../assets/logo.png';
import lupa from '../assets/lupa.png';
import opcao from '../assets/opcao.png';
import soma from '../assets/soma.png';

export default function Ativaalarm({navigation}) {
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
 
       {/* GRUPO HEAD */}
       <View style={styles.containerHead}>

         {/* HEAD */}
        <View style={styles.viewhead}>
          <View style={styles.headLeft}>
            <TouchableOpacity onPress={handMain}>
              <Image  style={styles.imgLeft} source={left} />
            </TouchableOpacity>
            <Text style={styles.textHead}> Adicionar Server</Text>
          </View>
          <View style={styles.headRight}> 
            <Image style={styles.imgRight} source={lupa} />
            <TouchableOpacity onPress={OpenMenu}>
              <Image style={styles.imgRight} source={opcao} />
            </TouchableOpacity>
          </View>
        </View>

        {/*Titulo*/}
        <View style={styles.viewtitulo}>
          <Image style={styles.imagetitulo} source={home}/>
          <View>
           <Text> CASA PRAIA</Text>
           <Text> Central de automação</Text>
          </View>
        </View>
      </View>

      {/*Body*/}
      <View style={styles.viewbody}>
        
        <View style={styles.viewdiv}/>
        <View style={styles.viewitem}>
          <Image style={styles.imagetitulo} source={logo}/>
          <View style={styles.viewitemtext}>
            <Text style={styles.itemtextbold}> Churrasqueira</Text>
            <Text style={styles.itemtext}> Festa noturna edicula</Text>
          </View>
          <Image style={styles.imagetitulo} source={soma}/>
        </View>
        
        <View style={styles.viewdiv}/>
        <View style={styles.viewitem}>
          <Image style={styles.imagetitulo} source={logo}/>
          <View style={styles.viewitemtext}>
            <Text style={styles.itemtextbold}> Churrasqueira</Text>
            <Text style={styles.itemtext}> Festa noturna edicula</Text>
          </View>
          <Image style={styles.imagetitulo} source={soma}/>
        </View>

        <View style={styles.viewdiv}/>
        <View style={styles.viewitem}>
          <Image style={styles.imagetitulo} source={logo}/>
          <View style={styles.viewitemtext}>
            <Text style={styles.itemtextbold}> Churrasqueira</Text>
            <Text style={styles.itemtext}> Festa noturna edicula</Text>
          </View>
          <Image style={styles.imagetitulo} source={soma}/>
        </View>

        <View style={styles.viewdiv}/>
        <View style={styles.viewitem}>
          <Image style={styles.imagetitulo} source={logo}/>
          <View style={styles.viewitemtext}>
            <Text style={styles.itemtextbold}> Churrasqueira</Text>
            <Text style={styles.itemtext}> Festa noturna edicula</Text>
          </View>
          <Image style={styles.imagetitulo} source={soma}/>
        </View>

        <View style={styles.viewdiv}/>
        <View style={styles.viewitem}>
          <Image style={styles.imagetitulo} source={logo}/>
          <View style={styles.viewitemtext}>
            <Text style={styles.itemtextbold}> Churrasqueira</Text>
            <Text style={styles.itemtext}> Festa noturna edicula</Text>
          </View>
          <Image style={styles.imagetitulo} source={soma}/>
        </View>

        <View style={styles.viewdiv}/>
      </View>

      {/*Foot*/}
      <View style={styles.viewfoot}>
        <Image style={styles.footimg} source={soma}/>
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

  containerHead: {
    height:'20%',
  },

  viewhead: {
    flexDirection: 'row',
    justifyContent: 'space-between' ,
    backgroundColor: "#003399",
    height:'40%',
    alignItems: 'center',
  },

  headLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  headRight:{
    flexDirection: 'row',
    padding: 10,
  },

  textHead:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'normal',
    marginLeft: 10,
  },

  imgRight: {
    height: 20,
    width: 20,
    marginRight: 10,
  },

  imgLeft: {
    height: 20,
    width: 20,
    marginTop: 5,
  },

  imagetitulo: {
    height: 40,
    width: 40,
  },

  viewtitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    height:'60%',
  },

  viewbody: {
    height:'auto',
  },

  viewfoot: {
    flexDirection: 'row',
    //alignItems: 'flex-end',
    justifyContent: 'flex-end' ,
    padding: 15,
    height:'12%',
  },

  viewitem: {
    backgroundColor: "#F2F5F7",
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  viewdiv: {
    height: 1,
    backgroundColor: '#BABABA'
  },

  viewitemtext:{
    width:'70%',
    justifyContent:'center',
  },

  itemtextbold:{
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold' ,
    alignItems:'flex-start',

  },

  itemtext:{
    color: '#000',
    fontSize: 15,
    fontWeight: 'normal',
  },

  footimg: {
    height: 48,
    width: 48,
    marginRight: 40,
  }

});
