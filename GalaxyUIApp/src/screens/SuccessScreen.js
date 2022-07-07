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
import { BigCard, Explore, HeaderText, Heading, TripCard } from "../components";
import { useNavigation } from "@react-navigation/native";
import Flights from "../../assets/datas/Flights";

const SuccessScreen = ({ route }) => {
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
      <Heading screen="Success" />

      <Text style={styles.subTitle}>Congratulations Farhan,</Text>
      <HeaderText text1="Your Trip has" text2="been booked" screen={"Trip"} />

      <Image
        source={require("../../assets/images/rocket.png")}
        style={{
          width: "100%",
          height: 400,
          resizeMode: "contain",
          marginTop: 45,
          marginBottom: 30,
        }}
      />

      <View style={{ marginTop: 220 }}>
        <Explore text="Continue to explore" screen="Discover" />
      </View>
    </ImageBackground>
  );
};

export default SuccessScreen;

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
  subTitle: {
    fontFamily: "Gordita-Regular",
    fontSize: 16,
    color: "#C8E7FC",
    marginHorizontal: 25,
    marginBottom: -30,
    marginTop: 40,
  },
  textHeading: {
    fontFamily: "Gordita-Medium",
    fontSize: 16,
    color: "#FFF",
    lineHeight: 25,
  },
  textRegular: {
    fontFamily: "Gordita-Regular",
    color: "#C8E7FC",
    fontSize: 14,
    lineHeight: 25,
  },
  textRegularWhite: {
    fontFamily: "Gordita-Regular",
    color: "#FFF",
    fontSize: 14,
    lineHeight: 25,
  },
  price: {
    fontFamily: "SpaceGrotesk-Medium",
    color: "#FFF",
    fontSize: 20,
    marginLeft: 15,
  },
});
