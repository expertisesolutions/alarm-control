import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import lupa from '../assets/lupa.png';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Drawer, Container, Header, Content,Button } from 'native-base';



class SideBar extends Component {
    
    
  render(){
      
      return (
              <View style={[ styles.container, { backgroundColor: '#fff' } ]}>
                      <Text>
                          <Icon name="rocket" size={30} color="#900" />
                          Conteúdo side bar
                      </Text>
              </View>
             );
  } 
};



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,' +
    'Shake or press menu button for dev menu',
});



  
export default function Login({navigation}) {
   

    return (
      <Drawer>
        <Container>
        <Header>
            <Container style={{flexDirection: 'row'}}>
              <Text>dcadfad</Text>
            </Container>
        </Header>
          
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit App.js
            </Text>
            <Text style={styles.instructions}>
              dasdasd
            </Text>
          </View>
         
        </Container>
      </Drawer>
    );
  };
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});