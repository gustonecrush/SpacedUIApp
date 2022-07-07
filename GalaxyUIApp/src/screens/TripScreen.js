import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Explore, HeaderText, Heading } from "../components";
import { Feather } from "@expo/vector-icons";

const TripScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    "SpaceGrotesk-Bold": require("../../assets/fonts/SpaceGrotesk-Bold.ttf"),
    "Gordita-Regular": require("../../assets/fonts/Gordita-Regular.otf"),
    "Gordita-Medium": require("../../assets/fonts/Gordita-Medium.otf"),
  });

  if (!loaded) return false;

  return (
    <ImageBackground
      source={require("../../assets/images/bg-home.png")}
      style={{ height: "100%", backgroundColor: '#000' }}
      imageStyle={{ height: "100%", opacity: 0.5 }}
    >
      <StatusBar hidden />
      {/* Header */}
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.heading}
          onPress={() => navigation.goBack()}
        >
          <Feather name="chevron-left" color="#FFF" size={20} />
        </TouchableOpacity>

        <Text></Text>
      </View>
      <HeaderText text1="Take a Trip" screen="Trip" />
      <Explore text="Search Flights" screen="SearchFlights" />
    </ImageBackground>
  );
};

export default TripScreen;

const styles = StyleSheet.create({
  planetContainer: {
    marginHorizontal: 25,
    marginTop: -270,
  },
  planetWrapper: {
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    width: 350,
  },
  planetImg: {},
  planetInfoWrapper: {
    alignItems: "center",
    marginTop: -80,
  },
  planetName: {
    fontFamily: "SpaceGrotesk-Bold",
    color: "#FFF",
    fontSize: 25,
    textTransform: "uppercase",
  },
  planetCalled: {
    fontFamily: "Gordita-Regular",
    color: "#C8E7FC",
    textTransform: "uppercase",
    fontSize: 16,
    marginTop: 10,
  },
  heading: {
    backgroundColor: "rgba(249,249,249,.1)",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginTop: 55,
  },
});
