import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import ComponentsScreen from '../screens/ComponentsScreen';
import ListScreen from '../screens/ListScreen';
import ImageScreen from '../screens/ImageScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Images: ImageScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
