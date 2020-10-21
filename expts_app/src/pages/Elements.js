import React, {useState} from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Image,
  ScrollView, SafeAreaView, TouchableOpacity, ViewBase
} from 'react-native';

import { Icon, Button, ThemeProvider } from 'react-native-elements'


export default function Sensores({navigation}) {

  function handMain(){
    navigation.navigate('Telas');
   }
   
   return (
    <View>
      <Text>Teste</Text>

      <Icon
        name= 'euro' // Desired Icon Name
        type= 'font-awesome'
        size={24}
        color='#000'
      />

      <ThemeProvider>
        <Button TITLE="HEY" />
      </ThemeProvider>

      <Icon
          name="heartbeat"
          type="font-awesome"
          size={20}
          reverse
          containerStyle={{ bottom: 20, right: 20 }}
          color="#f50"
        />

    </View>
    );
  };
  