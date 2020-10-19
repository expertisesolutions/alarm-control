import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//menu lateral
  //import CustonDrwer from './pages/services/CustonDrwer';
//services
import Disconnected from './pages/services/Disconnected';
//pages auth
import Register from './pages/auth/register';
import Login from './pages/auth/Login';
import Sendcode from './pages/auth/SendCode';
import Sendcodephone from './pages/auth/SendCodePhone';
import Code from './pages/auth/Code';
//pages app
import Main from './pages/Main';
import Addserver from './pages/Addserver';
import Armaralarm from './pages/Armaralarm';
import Mainnext from './pages/Mainnext';
import Telas from './pages/Telas';


const AppStack = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false}}>
        
        <AppStack.Screen name="Telas" component={Telas} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Sendcode" component={Sendcode} />
        <AppStack.Screen name="Sendcodephone" component={Sendcodephone} />
        <AppStack.Screen name="Code" component={Code} />
        <AppStack.Screen name="Register" component={Register} />
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="Addserver" component={Addserver} />
        <AppStack.Screen name="Armaralarm" component={Armaralarm} />
        <AppStack.Screen name="Mainnext" component={Mainnext} />
        <AppStack.Screen name="Disconnected" component={Disconnected} />

        
        {/* 
        <AppStack.Screen name="Teste" component={Teste} />
        <AppStack.Screen name="Quiz" component={Quiz} />
        <AppStack.Screen name="Historic" component={Historic} />
        <AppStack.Screen name="Register" component={Register} header={null} />
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="Initial" component={Initial} />
        <AppStack.Screen name="Controler" component={Controler} />
        */}

      </AppStack.Navigator> 
      
    </NavigationContainer>
  );
}