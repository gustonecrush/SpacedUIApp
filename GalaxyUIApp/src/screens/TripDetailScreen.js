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
import { BigCard, Explore, HeaderText, TripCard } from "../components";
import { useNavigation } from "@react-navigation/native";
import Flights from "../../assets/datas/Flights";

const TripDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;

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
          <Feather name="chevron-left" color="#FFF" size={20} />
        </TouchableOpacity>
        <Text style={[styles.logo, { marginLeft: -25 }]}>Flights</Text>
        <Text></Text>
      </View>

      <HeaderText text1="Flight details" screen="Trip" />
      <Text style={styles.subTitle}>Select your seat position</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 25,
          marginTop: 30,
        }}
      >
        <View style={styles.infoWrapper}>
          <View>
            <Text style={styles.textHeading}>
              {item.from.name.toUpperCase()}
            </Text>
            <Text style={styles.textRegular}>({item.from.id})</Text>
          </View>
          <Image
            source={require("../../assets/images/nasa-logo.png")}
            style={{ marginVertical: 15 }}
          />
          <View>
            <Text style={styles.textHeading}>{item.to.name.toUpperCase()}</Text>
            <Text style={styles.textRegular}>({item.to.id})</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.textRegular}>Depart</Text>
            <Text style={styles.textRegularWhite}>{item.depart}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.textRegular}>Flight No</Text>
            <Text style={styles.textRegularWhite}>{item.flightNo}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.textRegular}>Passengers</Text>
            <Text style={styles.textRegularWhite}>2</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.textHeading}>Ticket Price</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/icons/bitcoin-logo.png")}
              />
              <Text style={[styles.price, { marginLeft: 10 }]}>
                {item.price}
              </Text>
            </View>
          </View>
        </View>
        <Image source={require("../../assets/images/seat.png")} />
      </View>

      <View style={{ marginTop: 220 }}>
        <Explore text="Checkout" screen="Pay" />
      </View>
    </ImageBackground>
  );
};

export default TripDetailScreen;

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
    color: "#FFF",
    marginHorizontal: 25,
    marginBottom: 20,
    marginTop: -20,
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
