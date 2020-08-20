import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';

import Register from './pages/register';
import Login from './pages/Login'
import Main from './pages/Main'
import Test from './pages/Test'
import Test2 from './pages/Linkdireto'

const Routes = createAppContainer(
  createSwitchNavigator({
    Test2,
    Login,
    Main,
    Register,
    Test,
  })
);

export default Routes;
