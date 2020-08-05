import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps87690Navigator from '../features/Maps87690/navigator';
import Add-Item87689Navigator from '../features/Add-Item87689/navigator';
import Maps87685Navigator from '../features/Maps87685/navigator';
import UserProfile87681Navigator from '../features/UserProfile87681/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps87690: { screen: Maps87690Navigator },
Add-Item87689: { screen: Add-Item87689Navigator },
Maps87685: { screen: Maps87685Navigator },
UserProfile87681: { screen: UserProfile87681Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
