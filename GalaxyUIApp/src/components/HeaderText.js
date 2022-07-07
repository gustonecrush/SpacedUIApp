import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderText = ({ text1, text2, screen }) => {
  return (
    <View style={styles.container}>
      {screen === "Trip" ? null : (
        <Text style={styles.greeting}>Hi Farhan,</Text>
      )}

      <Text style={styles.header}>
        {text1}
        {"\n"}
        {text2}
      </Text>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  container: { marginTop: 30, marginHorizontal: 25 },
  greeting: {
    fontFamily: "Gordita-Regular",
    letterSpacing: -1,
    fontSize: 16,
    color: "#FFF",
  },
  header: {
    fontFamily: "SpaceGrotesk-Bold",
    fontSize: 24,
    color: "#FFF",
    marginTop: 10,
  },
});
