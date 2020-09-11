import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Register from './pages/register';
import Login from './pages/Login'
import Main from './pages/Main'
import Test from './pages/Test'
import Addserver  from './pages/Addserver'
import Ativaalarm from './pages/Armaralarm'
import Mainnext from './pages/Mainnext'
//import Menu from './pages/Menu'
import Teste from './pages/Teste'

const Routes = createAppContainer(
  createSwitchNavigator({
    Teste,
    Login,
    Main,
    Register,
    Test,
    Addserver,
    Ativaalarm,
    Mainnext,
  })
);

export default Routes;
