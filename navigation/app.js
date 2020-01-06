import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import deneme from "../screens/deneme/deneme";
import deneme2 from "../screens/deneme2/deneme2";
import splash from "../screens/splash";
import startPage from "../screens/start/startPage";

const Screens = createStackNavigator({
  splash : {screen: splash},
  deneme: {screen: deneme},
  deneme2: {screen: deneme2},
  startPage: {screen: startPage},

},
  {
    initialRouteName: 'splash',
    defaultNavigationOptions: {
      title: 'My ToDo List',
      headerStyle: {
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
      },
      headerTransparent: true
    },
  }
);


export default createAppContainer(Screens);