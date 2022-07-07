import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SmallCard = ({ item }) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={item.image}
        imageStyle={{
          width: "100%",
          height: "100%",
          resizeMode: "contain",
          borderRadius: 5,
        }}
        style={styles.container}
      >
        <View style={styles.cardInfoWrapper}>
          <View style={styles.categoryWrapper}>
            <Text style={styles.category}>{item.category}</Text>
          </View>
          <Text style={styles.name(item.color)}>{item.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default SmallCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    width: 200,
    height: 200,
    borderRadius: 5,
  },
  cardInfoWrapper: {
    marginTop: 15,
    marginLeft: 15,
  },
  categoryWrapper: {
    backgroundColor: "#090B28",
    paddingTop: 6,
    paddingHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
  category: {
    fontFamily: "Gordita-Bold",
    fontSize: 13,
    color: "#FFF",
    textTransform: "uppercase",
  },
  name: (color) => ({
    fontFamily: "SpaceGrotesk-Regular",
    fontSize: 16,
    textTransform: "uppercase",
    color: color,
    marginTop: 10,
    width: "80%",
  }),
});
