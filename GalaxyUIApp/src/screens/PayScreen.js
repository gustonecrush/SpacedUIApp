import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Explore } from "../components";
import { useNavigation } from "@react-navigation/native";

const PAYMENTS = [
  {
    id: 1,
    name: "Yellow Card",
    icon: require("../../assets/images/payments/card.png"),
  },
  {
    id: 2,
    name: "Apple Pay",
    icon: require("../../assets/images/payments/apple.png"),
  },
  {
    id: 3,
    name: "Paypal",
    icon: require("../../assets/images/payments/paypal.png"),
  },
  {
    id: 4,
    name: "Google Pay",
    icon: require("../../assets/images/payments/google.png"),
  },
  {
    id: 5,
    name: "Credit Card",
    icon: require("../../assets/images/payments/credit.png"),
  },
];

const PayScreen = () => {
  const navigation = useNavigation();
  const [select, setSelect] = useState("Yellow Card");

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

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 25,
          justifyContent: "center",
          paddingVertical: 70,
        }}
      >
        <Image source={require("../../assets/images/payments/bitcoin.png")} />
        <Text style={styles.price}>1.00</Text>
      </View>

      <View style={{ marginTop: -30 }}>
        <Text style={styles.subTitle}>Select your payment method</Text>
        <View style={{ marginHorizontal: 25, marginTop: 40 }}>
          {PAYMENTS.map((item, index) => (
            <View key={index} style={styles.listPaymentWrapper}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={item.icon} />
                <Text style={styles.listText}>{item.name}</Text>
              </View>
              <TouchableOpacity onPress={() => setSelect(item.name)}>
                <FontAwesome5
                  name="dot-circle"
                  size={25}
                  color={select === item.name ? "#FFF" : "#717780"}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      <View style={{ marginTop: 200 }}>
        <Explore text="Pay" screen="FingerPrint" />
      </View>
    </ImageBackground>
  );
};

export default PayScreen;

const styles = StyleSheet.create({
  listText: {
    marginLeft: 20,
    color: "#FFF",
    fontFamily: "Gordita-Medium",
    fontSize: 17,
  },
  listPaymentWrapper: {
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
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
    textAlign: "left",
    lineHeight: 25,
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
    fontSize: 50,
    marginLeft: 15,
  },
});
