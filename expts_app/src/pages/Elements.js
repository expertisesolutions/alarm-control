import React, {useState} from 'react';
import {
  View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Image,
  ScrollView, SafeAreaView, TouchableOpacity, ViewBase
} from 'react-native';

import { ActivityIndicator } from 'react-native'

import { Icon, Button, ThemeProvider } from 'react-native-elements'

import loading1 from '../assets/testes/loading1.gif'

export default function Sensores({navigation}) {

  function handMain(){
    navigation.navigate('Telas');
   }
   
   return (
    <View style={styles.viewBody}>
      <SafeAreaView>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>


    {/*  ----------------------------------  */}
            <Text> - 01</Text>
    {/*  ----------------------------------  */}
       <View>
            <Text> - 02</Text>
                <Icon
                  name= 'euro' // Desired Icon Name
                  type= 'font-awesome'
                  size={24}
                  color='#000'
                />
        </View>
    {/*  ----------------------------------  */}
        <View>
            <Text> - 03</Text>
                <ThemeProvider>
                  <Button TITLE="HEY" />
                </ThemeProvider>
        </View>
    {/*  ----------------------------------  */}
        <View>
          <Text> - 04</Text>
                <Icon
                    name="heartbeat"
                    type="font-awesome"
                    size={20}
                    reverse
                    containerStyle={{ bottom: 20, right: 20 }}
                    color="#f50"
                  />
         </View>
    {/*  ----------------------------------  */}
        <View>
                    <Text> - 05</Text>
                    <ActivityIndicator color='#2ed573' size='small' />
                    <ActivityIndicator color='#2ed573' size='large' />
                    <ActivityIndicator color='#2ed573' size='small' />
        </View> 
    {/*  ----------------------------------  */}
           <View>
             <Text> - 06</Text>
             <Image 
              style={{ width: 40, height: 40}}
              source={loading1}
             />
             <Image 
              style={{ width: 40, height: 40}}
              source={require('../assets/testes/loading2.gif')}
             />
             <Image 
              style={{ width: 40, height: 40}}
              source={require('../assets/testes/loading3.gif')}
             />
           </View>
    {/*  ----------------------------------  */}
    <View>
             <Text> - 07</Text>
           </View>
    {/*  ----------------------------------  */}
    <View>
             <Text> - 08</Text>
           </View>
    {/*  ----------------------------------  */}
          </ScrollView>
       </SafeAreaView>
    </View>
    );
  };
  


const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    height: '80%',
  },

});