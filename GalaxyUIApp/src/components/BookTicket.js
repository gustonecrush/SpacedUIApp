import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Foundation } from "@expo/vector-icons";

const BookTicket = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 25,
        marginTop: 20,
      }}
    >
      <Text style={{ fontFamily: "SpaceGrotesk-Regular", color: "#FFF" }}>
        Book a ticket to Earth :
      </Text>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "rgba(255,255,255,0.2)",
          paddingVertical: 10,
          paddingHorizontal: 12,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Image
          source={require("../../assets/images/icons/bitcoin-logo.png")}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <Text style={{ fontFamily: "SpaceGrotesk-Medium", color: "#FFF" }}>
          1.00 /{" "}
          <Text style={{ fontFamily: "SpaceGrotesk-Light" }}>person</Text>
        </Text>
      </View>
    </View>
  );
};

export default BookTicket;

const styles = StyleSheet.create({});
