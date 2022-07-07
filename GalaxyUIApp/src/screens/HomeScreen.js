import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Planets from "../../assets/datas/Planets";
import { Explore, HeaderText, Heading } from "../components";

const HomeScreen = () => {
  const [loaded] = useFonts({
    "SpaceGrotesk-Bold": require("../../assets/fonts/SpaceGrotesk-Bold.ttf"),
    "Gordita-Regular": require("../../assets/fonts/Gordita-Regular.otf"),
    "Gordita-Medium": require("../../assets/fonts/Gordita-Medium.otf"),
  });

  if (!loaded) return false;

  const Planet = ({ item }) => (
    <View style={styles.planetWrapper}>
      <Image source={item.image} style={styles.planetImg} />
      <View style={styles.planetInfoWrapper}>
        <Text style={styles.planetName}>{item.name}</Text>
        <Text style={styles.planetCalled}>{item.called}</Text>
      </View>
      <Explore item={item} text={"Explore planet"} screen="DetailPlanet" />
    </View>
  );

  return (
    <ImageBackground
      source={require("../../assets/images/bg-home.png")}
      style={{ height: "100%", backgroundColor: '#000' }}
      imageStyle={{ height: "100%", opacity: 0.4 }}
    >
      <StatusBar hidden />
      <Heading />
      <HeaderText text1="Which planet" text2="would you like to explore?" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.planetContainer}
      >
        {Planets.map((planet, index) => (
          <Planet key={index} item={planet} />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  planetContainer: {
    // marginHorizontal: 25,
    marginLeft: 25,
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
});
