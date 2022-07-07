import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Heading = ({ screen }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Spaced</Text>
      {screen == "Success" ? null : (
        <Image
          source={require("../../assets/user.png")}
          style={styles.profile}
        />
      )}
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginTop: 50,
  },
  logo: {
    fontFamily: "SpaceGrotesk-Bold",
    fontSize: 18,
    letterSpacing: 3,
    color: "#FFF",
    textTransform: "uppercase",
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
