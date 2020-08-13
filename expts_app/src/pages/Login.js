import React from 'react';
import { 
  Text, View, StyleSheet, StatusBar, Image, TextInput
} from 'react-native';

//media
import logo from '../assets/logo.png';

const Login = () =>  {
  return (
    <View style={styles.containerbackground}>
      <StatusBar  barStyle="light-content" backgroundColor="#003399" />
      <View style={styles.container}>
       <Image source={logo} />
      </View>
      <View style={styles.container}>
        <TextInput 
          placeholder="Login"
          style={styles.input}
        />
        <TextInput 
          placeholder="Login"
          style={styles.input}
        />
      </View >
      <View style={styles.foot}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headbar:{
    backgroundColor: "#003399",
  },

  containerbackground: {
    flex: 1,
    backgroundColor: "#F2F5F7",
    height: 'auto',
  },

  container: {
    flex: 1,
    backgroundColor: "#F2F5F7",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: "#FFFF",
    borderWidth: 1,
    borderColor: '#F2F5F7',
    borderRadius: 4,
    marginTop: 20,
    marginHorizontal: 10,
    paddingHorizontal: 15,
  },

  foot: {
    flex: 1,
    backgroundColor: "#003399",
    height: 50,
  },

});

export default Login();



