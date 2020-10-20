import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Image,
  TouchableOpacity

} from 'react-native';

//media
import left from '../../assets/left.png';
import home from '../../assets/home.png';
import logo from '../../assets/logo.png';
import lupa from '../../assets/lupa.png';
import opcao from '../../assets/opcao.png';
import soma from '../../assets/soma.png';

export default function HeadBlue({...props}) {
  function handMain(){
    props.funHead.navigate('Telas');
  }

  function OpenMenu(){
    props.funHead.openDrawer();
  }
 
   return (
     //{/* HEAD */}
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
   )};

const styles = StyleSheet.create({

  viewhead: {
    flexDirection: 'row',
    justifyContent: 'space-between' ,
    backgroundColor: "#003399",
    height:'7%',
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
    marginTop: '10%',
  },

  });
