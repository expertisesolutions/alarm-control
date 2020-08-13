import React from 'react';
import { 
  Text, View, StyleSheet, StatusBar, Image, TextInput
} from 'react-native';

//media
import logo from '../assets/logo.png';

const Login = () =>  {
  return (
    <View style={styles.container}>
      <StatusBar style={styles.headbar} barStyle = "light-content" />
      <Image source={logo} />
      <TextInput 
        placeholder="Login"
        style={styles.input}
        />
      <Text>Expertise Teste Teste</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headbar:{
    backgroundColor: "#003399",
  },

  container: {
    flex: 1,
    backgroundColor: "#F2F5F7",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  imput: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: "#FFFF",
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },

  foot: {

  }

});

export default Login();



