import React, {useState} from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Image,
  ScrollView, SafeAreaView, TouchableOpacity
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

//media
import logo from '../assets/logo.png';
import left from '../assets/leftBlack.png';
import right from '../assets/rightBlack.png';

//componets
import HeadBlue from './components/HeadBlue'

export default function Sensores({navigation}) {

  const [sensor001, set001] = useState([0,false]);
  const [sensor002, set002] = useState([0,false]);
  const [sensor003, set003] = useState([0,false]);
  const [sensor004, set004] = useState([0,false]);
  const [sensor005, set005] = useState([0,false]);
  const [sensor006, set006] = useState([0,false]);
  const [sensor007, set007] = useState([0,false]);
  const [sensor008, set008] = useState([0,false]);


  function handMain(){
   navigation.navigate('Telas');
  }
  
  return (
    <KeyboardAvoidingView 
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        style={styles.containerbackground}
    >
      {/* Status bar */}
      <StatusBar  barStyle="light-content" backgroundColor="#7C7B7B" />

      {/* HEAD */}
        <HeadBlue  funHead={navigation} />

      {/* BODY */}

      <View style={styles.containerLogo} >
       <Image style={styles.imgLogo} source={logo} />
      </View>

      <View style={styles.containerBody} >
              
             <SafeAreaView>
                <ScrollView
                  contentInsetAdjustmentBehavior="automatic"
                  style={styles.scrollView}>

                              <View style={styles.containerSensor} > 
                                  <View style={styles.viewSensor} >
                                    <Text style={styles.textName} >Nome do Sensor</Text>
                                    <Text style={styles.textType} >Dados do Sensor</Text>
                                  </View>
                                  <View style={styles.viewCheckbox}>
                                    <CheckBox
                                        disabled={false}
                                        value={sensor001[1]}
                                        onValueChange={(newValue) => set001([20,newValue])}
                                    />
                                  </View>
                              </View>


                              <View style={styles.containerSensor} > 
                                  <View style={styles.viewSensor} >
                                    <Text style={styles.textName} >Nome do Sensor</Text>
                                    <Text style={styles.textType} >Dados do Sensor</Text>
                                  </View>
                                  <View style={styles.viewCheckbox}>
                                    <CheckBox
                                        disabled={false}
                                        value={sensor002[1]}
                                        onValueChange={(newValue) => set002([20,newValue])}
                                    />
                                  </View>
                              </View>

                              <View style={styles.containerSensor} > 
                                  <View style={styles.viewSensor} >
                                    <Text style={styles.textName} >Nome do Sensor</Text>
                                    <Text style={styles.textType} >Dados do Sensor</Text>
                                  </View>
                                  <View style={styles.viewCheckbox}>
                                    <CheckBox
                                        disabled={false}
                                        value={sensor003[1]}
                                        onValueChange={(newValue) => set003([20,newValue])}
                                    />
                                  </View>
                              </View>

                              <View style={styles.containerSensor} > 
                                  <View style={styles.viewSensor} >
                                    <Text style={styles.textName} >Nome do Sensor</Text>
                                    <Text style={styles.textType} >Dados do Sensor</Text>
                                  </View>
                                  <View style={styles.viewCheckbox}>
                                    <CheckBox
                                        disabled={false}
                                        value={sensor004[1]}
                                        onValueChange={(newValue) => set004([20,newValue])}
                                    />
                                  </View>
                              </View>

                              <View style={styles.containerSensor} > 
                                  <View style={styles.viewSensor} >
                                    <Text style={styles.textName} >Nome do Sensor</Text>
                                    <Text style={styles.textType} >Dados do Sensor</Text>
                                  </View>
                                  <View style={styles.viewCheckbox}>
                                    <CheckBox
                                        disabled={false}
                                        value={sensor005[1]}
                                        onValueChange={(newValue) => set005([20,newValue])}
                                    />
                                  </View>
                              </View>

                              <View style={styles.containerSensor} > 
                                  <View style={styles.viewSensor} >
                                    <Text style={styles.textName} >Nome do Sensor</Text>
                                    <Text style={styles.textType} >Dados do Sensor</Text>
                                  </View>
                                  <View style={styles.viewCheckbox}>
                                    <CheckBox
                                        disabled={false}
                                        value={sensor006[1]}
                                        onValueChange={(newValue) => set006([20,newValue])}
                                    />
                                  </View>
                              </View>

                              <View style={styles.containerSensor} > 
                                  <View style={styles.viewSensor} >
                                    <Text style={styles.textName} >Nome do Sensor</Text>
                                    <Text style={styles.textType} >Dados do Sensor</Text>
                                  </View>
                                  <View style={styles.viewCheckbox}>
                                    <CheckBox
                                        disabled={false}
                                        value={sensor006[1]}
                                        onValueChange={(newValue) => set006([20,newValue])}
                                    />
                                  </View>
                              </View>

                    </ScrollView>
                </SafeAreaView>
      </View>

      <View style={styles.containerFooter}>
        <View style={styles.viewFoot}>

        <TouchableOpacity
          onPress={handMain}
          style={styles.nextPage}
          >
            <Image style={styles.imgFooter} source={left} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handMain}
          style={styles.numberPage}
          >
            <Text>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handMain}
          style={styles.numberPage}
          >
            <Text>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handMain}
          style={styles.numberPage}
          >
            <Text>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handMain}
          style={styles.nextPage}
          >
            <Image style={styles.imgFooter} source={right} />
        </TouchableOpacity>

        </View>
      </View>

    </KeyboardAvoidingView>
    );
  };
  
  
  const styles = StyleSheet.create({

    containerbackground: {
      flex: 1,
      //backgroundColor: "#F2F5F7",
      backgroundColor: "#FFF",
      paddingHorizontal: 0,
      justifyContent: 'space-between' ,
      //paddingTop: Constant
    },

    containerLogo: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '15%',
      padding: 30,
      //backgroundColor: '#1A4',
    },

    containerBody: {
      flex: 1,
      height: '65%',
      justifyContent:'space-between',
      //backgroundColor: '#FA4',
    },

    containerSensor:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      height:50,
      //backgroundColor: '#424',

    },

    containerFooter: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '13%',
    },

    viewSensor:{
      marginTop: 5,
      marginLeft: '5%',
      width: '60%',
    },

    viewFoot: {
      flexDirection: 'row',
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },

    imgLogo: {
      height: 37,
      width: 37,
    },

    textName:{
      color: '#000',
      fontSize: 16,
      fontWeight: 'bold',

    },
    textType: {
      color: '#878585',
      fontSize: 14,
      fontWeight: 'normal',
    },

    viewCheckbox:{
      marginRight: '8%',
      width: '28%',
      height: 40,
      marginTop: 5,
      alignItems: 'flex-end',
      justifyContent: 'center',
      //backgroundColor: '#B5a'
    },

    scrollView: {
      height: '100%',
    },

    numberPage:{
      width: '10%',
      alignItems: 'center',
    },

    nextPage:{
      width: '10%',
      alignItems: 'center',
    },
    
    imgFooter:{
      height: 18,
      width: 18,
    }

  })