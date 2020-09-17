import React from 'react';
import { 
  Text, View, StyleSheet, StatusBar, Image, TextInput,
  TouchableOpacity, KeyboardAvoidingView, Platform
} from 'react-native';

//media
import logo from '../../assets/logo.png';

//const Login= ({ navigation }) =>  {

export default function Login({navigation}) {
     function handloLogin(){
      navigation.navigate('Telas');
     }

     function Registrar(){
      navigation.navigate('Telas');
     }

  return (
    <KeyboardAvoidingView 
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.containerbackground}
      >
      <StatusBar  barStyle="light-content" backgroundColor="#003399" />
      <View style={styles.container}>
       <Image source={logo} />
      </View>
      <View style={styles.container}>
        <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Login"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput 
          placeholder="Login"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TouchableOpacity onPress={handloLogin} style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Registrar} style={styles.registro}>
          <View style={styles.view_foot}>
            <Text style={styles.foottext}>Não possui acesso ? <Text style={styles.foottextBold}>Solicitar</Text></Text>
          </View>
        </TouchableOpacity>
      </View >
      <View style={styles.foot}>
      </View>
    </KeyboardAvoidingView>
  )
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

  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: "#003399",
    borderRadius: 4,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  foot: {
    flex: 1,
    backgroundColor: "#003399",
    position: 'relative',
    height: 20,
    left: 0,
    top: 175,
  },

  registro:{

  },

  view_foot: {
    marginTop: 40,
    //justifyContent: 'center',
    alignItems: 'center',
    height: 46,
  },

  foottext: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'normal',
  },


});

//export default Login();



