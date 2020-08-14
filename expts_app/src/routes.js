import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';

import Register from './pages/register';
import Login from './pages/Login'
import Main from './pages/Main'


const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
    Register,
  })
);

export default Routes;
