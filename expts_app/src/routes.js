import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Register from './pages/register';
import Login from './pages/Login'
import Main from './pages/Main'
import Addserver from './pages/Addserver'
import Ativaalarm from './pages/Armaralarm'
import Mainnext from './pages/Mainnext'
import CustonDrwer from './pages/CustonDrwer'


const Auth = createSwitchNavigator({
  Auth: {
  screen: Login
},

});

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
});

export default createAppContainer(Routes);

// Rotas: {
// screen: Routes,
// },
