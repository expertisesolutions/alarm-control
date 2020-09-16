import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
//menu lateral
import CustonDrwer from './pages/services/CustonDrwer';
//pages auth
import Register from './pages/auth/register';
import Login from './pages/auth/Login';
import Sendcode from './pages/auth/SendCode';
import Sendcodephone from './pages/auth/SendCodePhone';
import Code from './pages/auth/Code';
//pages app
import Main from './pages/Main';
import Addserver from './pages/Addserver';
import Ativaalarm from './pages/Armaralarm';
import Mainnext from './pages/Mainnext';

const Menudrawer = createDrawerNavigator({

  Main: {
    screen: Main,
  },
  Register: {
    screen: Register,
  },
  
  Addserver: {
    screen: Addserver,
  },
  Ativaalarm: {
    screen: Ativaalarm,
  },
  Mainnext:{
    screen: Mainnext,
  },
  
},{
  contentComponent: CustonDrwer
});

const Routes = createSwitchNavigator({
  Auth: {
    screen: Login
  },
  Test: {
    screen: Menudrawer,
  },
  Sendcode:{
    screen: Sendcode,
  },
});

export default createAppContainer(Routes);

// Rotas: {
// screen: Routes, f
// },
