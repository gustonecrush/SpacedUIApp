import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Explore = ({ item, text, screen }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={
        screen !== "Detail" ? styles.container() : styles.container("Detail")
      }
      onPress={() => navigation.navigate(screen, { item: item })}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: (detail) => ({
    marginHorizontal: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: detail ? "#232A31" : "rgba(35,42,49,0.7)",
    position: "absolute",
    bottom: 120,
    width: "87%",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
  }),
  text: {
    fontFamily: "Gordita-Medium",
    fontSize: 17,
    color: "#FFF",
  },
});
