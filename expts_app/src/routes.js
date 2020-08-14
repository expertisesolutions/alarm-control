import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';

import Register from './pages/register';
import Login from './pages/Login'


const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Register,
  })
);

export default Routes;
