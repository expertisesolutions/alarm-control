import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CustonDrwer from './pages/services/CustonDrwer'
import Register from './pages/auth/register';
import Login from './pages/auth/Login'
import Main from './pages/Main'
import Addserver from './pages/Addserver'
import Ativaalarm from './pages/Armaralarm'
import Mainnext from './pages/Mainnext'



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
