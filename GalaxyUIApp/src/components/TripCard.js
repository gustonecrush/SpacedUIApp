import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TripCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("TripDetail", { item: item })}
    >
      {/* Destination */}
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.textHeading}>{item.from.name}</Text>
          <Text style={styles.textRegularWhite}>({item.from.id})</Text>
        </View>
        <Image source={require("../../assets/images/nasa-logo.png")} />
        <View>
          <Text style={styles.textHeading}>{item.to.name}</Text>
          <Text style={styles.textRegularWhite}>({item.to.id})</Text>
        </View>
      </View>

      {/* Timing */}
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.textRegular}>Depart</Text>
          <Text style={styles.textHeading}>{item.depart}</Text>
        </View>
        <Text style={styles.textRegularWhite}>{item.timing}</Text>
        <View>
          <Text style={styles.textRegular}>Flight No</Text>
          <Text style={styles.textHeading}>{item.flightNo}</Text>
        </View>
      </View>

      {/* Illustration */}
      <Image
        source={require("../../assets/images/ill.png")}
        style={{ margin: 3, width: "100%", resizeMode: "contain" }}
      />

      {/* Pricing */}
      <View style={[styles.wrapper, { marginTop: 15, marginBottom: 0 }]}>
        <Text style={[styles.textRegularWhite, { fontSize: 17 }]}>
          Ticket Price:{" "}
        </Text>
        <View style={[styles.wrapper, { marginTop: 5 }]}>
          <Image
            source={require("../../assets/images/icons/bitcoin-logo.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingTop: 25,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
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
