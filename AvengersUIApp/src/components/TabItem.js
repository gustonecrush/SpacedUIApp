import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";

const IconTab = ({ label, isFocused }) => {
  if (label === "Movies")
    return isFocused ? (
      <View>
        <MaterialCommunityIcons
          name="movie-open-play-outline"
          size={20}
          color="#FFF"
        />
      </View>
    ) : (
      <View>
        <MaterialCommunityIcons
          name="movie-open-play-outline"
          size={20}
          color="gray"
        />
      </View>
    );
  if (label === "Comics")
    return isFocused ? (
      <View>
        <MaterialCommunityIcons
          name="book-open-blank-variant"
          size={20}
          color="#FFF"
        />
      </View>
    ) : (
      <View>
        <MaterialCommunityIcons
          name="book-open-blank-variant"
          size={20}
          color="gray"
        />
      </View>
    );
  if (label === "Heroes")
    return isFocused ? (
      <View>
        <MaterialCommunityIcons name="human" size={20} color="#FFF" />
      </View>
    ) : (
      <View>
        <MaterialCommunityIcons name="human" size={20} color="gray" />
      </View>
    );
};

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
  const [loaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) return false;

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <IconTab label={label} isFocused={isFocused} />
      <Text style={[styles.text(isFocused)]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: (isFocused) => ({
    fontSize: 12,
    marginTop: 6,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Poppins-Regular",
  }),
});
