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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Places from "../../assets/datas/Places";
import { BigCard, Explore, HeaderText, TripCard } from "../components";
import { useNavigation } from "@react-navigation/native";
import Flights from "../../assets/datas/Flights";

const FingerPrintScreen = () => {
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
      style={{ height: "100%", backgroundColor: "#000" }}
      imageStyle={{ height: "100%", opacity: 0.5 }}
    >
      <StatusBar hidden />

      {/* Header */}
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.heading}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="close" color="#FFF" size={20} />
        </TouchableOpacity>
        <Text style={[styles.logo, { marginLeft: -25 }]}>Pay</Text>
        <Text></Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Success")}>
        <Image
          source={require("../../assets/images/fingerprint.png")}
          style={{ width: "100%", resizeMode: "contain", position: "absolute", top: 200 }}
        />
      </TouchableOpacity>

      <Text style={styles.subTitle}>
        Press your finger to complete{"\n"}payment
      </Text>
    </ImageBackground>
  );
};

export default FingerPrintScreen;

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
  heading: {
    backgroundColor: "rgba(249,249,249,.1)",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  subTitle: {
    fontFamily: "Gordita-Regular",
    fontSize: 16,
    color: "#C8E7FC",
    marginHorizontal: 25,
    marginBottom: -30,
    marginTop: 40,
    textAlign: "center",
    lineHeight: 25,
    position: "absolute",
    bottom: 150,
    left: 65,
  },
});
