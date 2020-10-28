import React,{useState, useEffect} from 'react';
import { 
  Text, View, StyleSheet, StatusBar, Image, TextInput,
  TouchableOpacity, KeyboardAvoidingView, Platform
} from 'react-native';

//media
//import logo from '../../assets/logo.png';

//const Login= ({ navigation }) =>  {

export default function Login({navigation}) {

  const [loadTime, setloadTime] = useState(true);
  const [loadText, setloadText] = useState();

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const loadertext = ['','.','..','...','....','.....','......','.......','........']


  useEffect(() => {
    loading()
    
  }, [])


  async function loading(){
    for (let i = 0; i <= 6; i++){
      await delay(420)
      if(i != 6){
        setloadText(loadertext[i])
      }
      else{ 
        navigation.navigate('Login');
       return
      }
    }
  }


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
      </View>
      <View style={styles.container}>

              <Image 
                style={{ width: 180, height: 180}}
                source={require('../assets/testes/EmpresaLoading.gif')}
              />

              <Text style={{
                  marginTop: 50,
                   color: '#000',
                   fontSize: 16,
                   fontWeight: 'normal',
              }}>Carregando </Text>

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
    backgroundColor: "#FFF",
    borderBottomColor: '#999',
    borderBottomWidth: 1,
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

  ImgLogo: {
    height: 50,
    width: 50,
  }

});

//export default Login();



