import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
