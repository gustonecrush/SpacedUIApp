import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Foundation,
  Feather,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
    const size = 25;
    const colorActive = "#FFF";
    const colorDeactive = "#475663";

    if (label === "Home")
      return isFocused ? (
        <Foundation name="home" color={colorActive} size={size} />
      ) : (
        <Foundation name="home" color={colorDeactive} size={size} />
      );
    if (label === "Discover")
      return isFocused ? (
        <Feather name="search" color={colorActive} size={size} />
      ) : (
        <Feather name="search" color={colorDeactive} size={size} />
      );
    if (label === "Trip")
      return isFocused ? (
        <Octicons name="feed-rocket" color={colorActive} size={35} />
      ) : (
        <Octicons name="feed-rocket" color={colorDeactive} size={35} />
      );
    if (label === "Bookmark")
      return isFocused ? (
        <MaterialCommunityIcons
          name="bookmark"
          color={colorActive}
          size={size}
        />
      ) : (
        <MaterialCommunityIcons
          name="bookmark"
          color={colorDeactive}
          size={size}
        />
      );
    if (label === "Account")
      return isFocused ? (
        <MaterialCommunityIcons
          name="account"
          color={colorActive}
          size={size}
        />
      ) : (
        <MaterialCommunityIcons
          name="account"
          color={colorDeactive}
          size={size}
        />
      );
  };

  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      onPress={onPress}
      style={styles.container}
    >
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
