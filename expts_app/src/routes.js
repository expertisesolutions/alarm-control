import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Register from './pages/register';
import Login from './pages/Login'
import Main from './pages/Main'
import Test from './pages/Test'
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
  Test: {
    screen: Test,
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