import React from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Image

} from 'react-native';

export default function Addserver({navigation}) {
  function handloLogin(){
   navigation.navigate('Main');
  }

  return (
    <KeyboardAvoidingView 
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        style={styles.containerbackground}
    >
      <StatusBar  barStyle="light-content" backgroundColor="#7C7B7B" />
      <View style={styles.head}>
       <Image source={logo} />
      </View>



    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  containerbackground: {
    flex: 1,
    backgroundColor: "#F2F5F7",
    height: 'auto',
  },

  head: {
    flex: 1,
    backgroundColor: "#003399",
    height: 2,
  },


});