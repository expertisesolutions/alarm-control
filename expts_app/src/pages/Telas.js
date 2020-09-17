import React from 'react';
import { 
  Text, View, StyleSheet, StatusBar, Image,TouchableOpacity,
  KeyboardAvoidingView, Platform
} from 'react-native';

//media
import logo from '../assets/logo.png';

//const Login= ({ navigation }) =>  {

export default function Telas({navigation}) {
     function handloLogin(){
      navigation.navigate('Login');
     }

     function SendCode(){
      navigation.navigate('Sendcode');
     }

     function SendCodePhone(){
      navigation.navigate('Sendcodephone');
     }

     function Code(){
      navigation.navigate('Code');
     }

     function Main(){
      navigation.navigate('Main');
     }


     function AddServer(){
      navigation.navigate('Addserver');
     }

     function AtivarAlarme(){
      navigation.navigate('Ativaalarm');
     }

     function Registrar(){
      navigation.navigate('Register');
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
        <TouchableOpacity onPress={handloLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={SendCode} style={styles.button}>
          <Text style={styles.buttonText}>SendEmail</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={SendCodePhone} style={styles.button}>
          <Text style={styles.buttonText}>Send CodePhone</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Code} style={styles.button}>
          <Text style={styles.buttonText}>Code</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Main} style={styles.button}>
          <Text style={styles.buttonText}>Main</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={AddServer} style={styles.button}>
          <Text style={styles.buttonText}>AddServer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={AtivarAlarme} style={styles.button}>
          <Text style={styles.buttonText}>ArmaAlarm</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handloLogin} style={styles.button}>
          <Text style={styles.buttonText}>Mapas</Text>
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

  button: {
    height: 30,
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



