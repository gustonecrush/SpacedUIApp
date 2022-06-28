import React from "react";
import Main from "./src/components/Main";
import Splash from "./src/components/Splash";
import Movies from "./src/components/Movies";
import Comics from "./src/components/Comics";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomNavigator from "./src/components/BottomNavigator";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => (
  <Tab.Navigator
    tabBar={(props) => <BottomNavigator {...props} />}
    initialRouteName="Heroes"
  >
    <Tab.Screen
      name="Movies"
      component={Movies}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Comics"
      component={Comics}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Heroes"
      component={Main}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainApp">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Movies"
          component={Movies}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
