/*
import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  )
}
*/
 


///**
import React, { useEffect } from "react";
import { Text, View, StyleSheet, BackHandler, Alert } from "react-native";
import Routes from './src/routes';

export default function App() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Espere!", "Tem certeza que quer sair ?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Sair", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Routes />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  }
});




//*/