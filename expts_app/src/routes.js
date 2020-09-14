import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Register from './pages/register';
import Login from './pages/Login'
import Main from './pages/Main'
import Test from './pages/Test'
import Addserver  from './pages/Addserver'
import Ativaalarm from './pages/Armaralarm'
import Mainnext from './pages/Mainnext'


const Routes = createSwitchNavigator({
    Login,
    Main,
    Register,
    Test,
    Addserver,
    Ativaalarm,
    Mainnext,
  });

const Menudrawer = createDrawerNavigator({
    Login: {
      screen: Routes,
    },
  });

export default createAppContainer(Menudrawer);

