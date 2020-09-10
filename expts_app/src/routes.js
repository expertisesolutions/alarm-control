import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';

import Register from './pages/register';
import Login from './pages/Login'
import Main from './pages/Main'
import Test from './pages/Test'
import Addserver  from './pages/Addserver'
import Ativaalarm from './pages/Armaralarm'
import Mainnext from './pages/Mainnext'
import Menu from './pages/Menu'

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
    Register,
    Test,
    Addserver,
    Ativaalarm,
    Mainnext,
    Menu,
  })
);

export default Routes;
