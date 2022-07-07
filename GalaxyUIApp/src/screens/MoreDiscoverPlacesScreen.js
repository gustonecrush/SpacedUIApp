import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Places from "../../assets/datas/Places";
import { BigCard } from "../components";
import { useNavigation } from "@react-navigation/native";

const MoreDiscoverPlaces = () => {
  const navigation = useNavigation();
  
  const [loaded] = useFonts({
    "SpaceGrotesk-Bold": require("../../assets/fonts/SpaceGrotesk-Bold.ttf"),
    "SpaceGrotesk-Regular": require("../../assets/fonts/SpaceGrotesk-Regular.ttf"),
    "SpaceGrotesk-Medium": require("../../assets/fonts/SpaceGrotesk-Medium.ttf"),
    "Gordita-Regular": require("../../assets/fonts/Gordita-Regular.otf"),
    "Gordita-Medium": require("../../assets/fonts/Gordita-Medium.otf"),
    "Gordita-Bold": require("../../assets/fonts/Gordita-Bold.otf"),
  });

  if (!loaded) return false;

  return (
    <ImageBackground
      source={require("../../assets/images/bg-home.png")}
      style={{ height: "100%" }}
      imageStyle={{ height: "100%" }}
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
        <Text style={styles.logo}>Featured Destinations</Text>
        <Text></Text>
      </View>

      {/* Places */}
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 40, marginHorizontal: 25 }}
      >
        {Places.map((item, index) => (
          <View key={index}>
            <BigCard item={item} size="100%" />
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default MoreDiscoverPlaces;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginTop: 55,
  },
  logo: {
    fontFamily: "SpaceGrotesk-Bold",
    fontSize: 17,
    letterSpacing: 3,
    color: "#FFF",
    textTransform: "uppercase",
    marginLeft: 5,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  heading: {
    backgroundColor: "rgba(249,249,249,.1)",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});
