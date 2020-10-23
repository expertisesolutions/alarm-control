import React from 'react';
import { 
  Text, View, StyleSheet, StatusBar, Image,TouchableOpacity,
  KeyboardAvoidingView, Platform, ScrollView, SafeAreaView
} from 'react-native';

//media
import logo from '../assets/logo.png';

//const Login= ({ navigation }) =>  {

export default function Telas({navigation}) {

     function Login(){
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
      navigation.navigate('Armaralarm');
     }

     function Registrar(){
      navigation.navigate('Register');
     }

     function Disconnected(){
      navigation.navigate('Disconnected');
     }
     
     function Sensores(){
      navigation.navigate('Sensores');
     }

     function Elementos(){
       navigation.navigate('Elementos')
     }



     function Nulo(){
      
     }

  return (
    <KeyboardAvoidingView 
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.containerbackground}
      >
      <StatusBar  barStyle="light-content" backgroundColor="#003399" />
      <View style={styles.container}>
       <Image style={styles.ImgLogo} source={logo} />
      </View>

      <View style={styles.viewBody}>
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>

                  <View style={styles.container}>

                    <TouchableOpacity onPress={Login} style={styles.button}>
                      <Text style={styles.buttonText}>. . . </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={Login} style={styles.button}>
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
                  </View >

                  <View style={styles.container}>
                  <TouchableOpacity onPress={Main} style={styles.button2}>
                      <Text style={styles.buttonText}>Main</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={AddServer} style={styles.button2}>
                      <Text style={styles.buttonText}>AddServer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={AtivarAlarme} style={styles.button2}>
                      <Text style={styles.buttonText}>Ativa Alarme</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.button2}>
                      <Text style={styles.buttonText}>. . .</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.container}>
                    <TouchableOpacity onPress={Disconnected} style={styles.button3}>
                        <Text style={styles.buttonText}>Disconnected</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={Sensores} style={styles.button3}>
                        <Text style={styles.buttonText}>Sensores</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={Elementos} style={styles.button3}>
                        <Text style={styles.buttonText}>Elements</Text>
                      </TouchableOpacity>

                      <TouchableOpacity  style={styles.button3}>
                        <Text style={styles.buttonText}>. . .</Text>
                      </TouchableOpacity>
                    
                    <TouchableOpacity  style={styles.button3}>
                        <Text style={styles.buttonText}>. . .</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.button3}>
                        <Text style={styles.buttonText}>. . .</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.button3}>
                        <Text style={styles.buttonText}>. . .</Text>
                    </TouchableOpacity>

                  </View>
              </ScrollView>
            </SafeAreaView>
          </View>
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
    backgroundColor: "#F2F5F7",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,

  },

  button: {
    height: 25,
    alignSelf: 'stretch',
    backgroundColor: "#003399",
    borderRadius: 4,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  button2: {
    height: 25,
    alignSelf: 'stretch',
    backgroundColor: "#CC0000",
    borderRadius: 4,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  button3: {
    height: 25,
    alignSelf: 'stretch',
    backgroundColor: "#219653",
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
    backgroundColor: "#003399",
    height: '5%'
  },

  viewBody: {
    flex: 1,
    height: '85%',
  },

  view_foot: {
    marginTop: 40,
    //justifyContent: 'center',
    alignItems: 'center',
    height:  '10%',
  },

  foottext: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'normal',
  },

  ImgLogo: {
    height: 50,
    width: 50,
  },

  scrollView: {
   // height: '100%',
    alignSelf: 'stretch',
  },

});

//export default Login();



