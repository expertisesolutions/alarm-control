import React from  'react'
import {
  Text, View, StyleSheet, StatusBar, Image, TextInput,
  TouchableOpacity 
} from 'react-native';

import {openDrawer} from 'react-navigation-drawer';

//media

import Menu from '../assets/menu.png'


export default function CustonDrawer({...props}){
  return(
    <View style={styles.containerbackground}>
      <View style={styles.viewHead}>
        <Image source={Menu} style={styles.iconHead}/>
        <Text style={styles.textoHead}> Menu</Text>
      </View>
      <View style={styles.viewItens}>

        <View style={styles.viewItem}>
          <Image source={Menu} style={styles.iconItem}/>
          <Text style={styles.textoItem}> Texto Item</Text>
        </View>

        <View style={styles.viewItem}>
          <Image source={Menu} style={styles.iconItem}/>
          <Text style={styles.textoItem}> Texto Item</Text>
        </View>

        <View style={styles.viewItem}>
          <Image source={Menu} style={styles.iconItem}/>
          <Text style={styles.textoItem}> Texto Item</Text>
        </View>

        <View style={styles.viewItem}>
          <Image source={Menu} style={styles.iconItem}/>
          <Text style={styles.textoItem}> Texto Item</Text>
        </View>

        <View style={styles.viewItem}>
          <Image source={Menu} style={styles.iconItem}/>
          <Text style={styles.textoItem}> Texto Item</Text>
        </View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({

  containerbackground: {
    flex: 1,
    backgroundColor: "#8A8A8A",
    justifyContent:'space-between',
  },

  viewHead:{
    flexDirection: 'row',
    alignItems:'center',
    height:'10%',
    padding: 15,
  },

  viewItens:{
    height:'90%',
  },

  viewItem:{
    flexDirection: 'row',
    alignItems:'center',
    padding: 18,
  },

  iconHead:{
    height: 40,
    width: 40,
  },

  iconItem:{
    height: 30,
    width: 30,
  },

  textoHead:{
    marginLeft: 15,
    color: '#FFF',
    fontSize: 20,
    fontWeight:'bold',
  },

  textoItem:{
    marginLeft: 20,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

