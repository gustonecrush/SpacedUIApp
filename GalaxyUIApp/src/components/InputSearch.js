import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const InputSearch = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={23} color="#FFF" />
      <TextInput
        placeholder="Search for planets or galaxies"
        placeholderTextColor="#A5A8AC"
        style={styles.textInput}
      />
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 25,
    marginTop: 30,
    backgroundColor: "rgba(255,255,255,0.08)",
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomColor: "#FFF",
    borderBottomWidth: 1,
  },
  textInput: {
    marginLeft: 10,
    fontFamily: "Gordita-Regular",
    fontSize: 15,
  },
});
