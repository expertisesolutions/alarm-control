import React from  'react'
import {
  Text, View, StyleSheet, StatusBar, Image, TextInput,
  TouchableOpacity 
} from 'react-native';

import { DrawerNavigationItems } from 'react-navigation-drawer';



//media

import Menu from '../assets/menu.png'


export default function CustonDrawer({...props}){
  return(
    <View style={styles.containerbackground}>
      <View style={styles.viewHead}>
        <Image source={Menu} style={styles.iconHead}/>
        <Text style={styles.textoHead}> Titulo</Text>
      </View>
      <View style={styles.viewItens}>
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
    backgroundColor: "#C4C4C4",
    justifyContent:'space-between',
  },

  viewItens:{
  },

  viewItem:{
  },

  iconHead:{
  },

  iconItem:{
  },

  textoHead:{
  },

  textoItem:{
  },
});

