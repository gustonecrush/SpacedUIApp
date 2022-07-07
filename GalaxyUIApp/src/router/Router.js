import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AccountScreen,
  BookmarkScreen,
  DetailPlanetScreen,
  DiscoverScreen,
  HomeScreen,
  PaymentScreen,
  TripScreen,
  MoreDiscoverPlacesScreen,
  DetailPlaceScreen,
  SplashScreen,
  SearchFlightsScreen,
  TripDetailScreen,
  PayScreen,
  FingerPrintScreen,
  SuccessScreen,
} from "../screens";
import { BottomNavigator } from "../components";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

const MainApp = () => (
  <Tab.Navigator
    screenOptions={screenOptions}
    tabBar={(props) => <BottomNavigator {...props} />}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Discover" component={DiscoverScreen} />
    <Tab.Screen name="Trip" component={SearchFlightsScreen} />
    <Tab.Screen name="Bookmark" component={BookmarkScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

const Router = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="DetailPlanet" component={DetailPlanetScreen} />
      <Stack.Screen
        name="MoreDiscoverPlaces"
        component={MoreDiscoverPlacesScreen}
      />
      <Stack.Screen name="DetailPlace" component={DetailPlaceScreen} />
      <Stack.Screen name="SearchFlights" component={SearchFlightsScreen} />
      <Stack.Screen name="TripDetail" component={TripDetailScreen} />
      <Stack.Screen name="Pay" component={PayScreen} />
      <Stack.Screen name="FingerPrint" component={FingerPrintScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
};

export default Router;
