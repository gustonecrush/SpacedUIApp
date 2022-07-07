import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("MainApp");
    }, 3000);
  }, [navigation]);

  const [loaded] = useFonts({
    "SpaceGrotesk-Bold": require("../../assets/fonts/SpaceGrotesk-Bold.ttf"),
  });

  if (!loaded) return false;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={styles.logo}>Spaced</Text>
      <Image
        style={{
          zIndex: -1,
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0.5,
        }}
        source={require("../../assets/images/bg-home.png")}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logo: {
    fontFamily: "SpaceGrotesk-Bold",
    fontSize: 40,
    letterSpacing: 3,
    color: "#FFF",
    textTransform: "uppercase",
  },
});
