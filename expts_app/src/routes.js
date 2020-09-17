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
import Telas from './pages/Telas';

const Menudrawer = createDrawerNavigator({
  Auth: {
    screen: Login
  },
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
// Teslas de teste 
  Auth: {
    screen: Login
  },
  Sendcode:{
    screen: Sendcode,
  },
  Sendcodephone:{
    screen: Sendcodephone,
  },
  Code:{
    screen: Code,
  }
  
},{
  contentComponent: CustonDrwer
});

const Routes = createSwitchNavigator({
  Telas: {
    screen: Telas,
  }, 
  Test: {
    screen: Menudrawer,
  },
});

export default createAppContainer(Routes);

// Rotas: {
// screen: Routes, f
// },
