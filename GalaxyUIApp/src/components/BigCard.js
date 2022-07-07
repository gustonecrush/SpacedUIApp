import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BigCard = ({ item, size }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailPlace", { item: item })}
      style={size ? { marginBottom: 20 } : { marginBottom: 0 }}
    >
      <ImageBackground
        source={item.image}
        imageStyle={{ borderRadius: 5 }}
        style={size ? styles.container(size) : styles.container()}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <View style={{ marginHorizontal: 10, marginBottom: 15 }}>
            <Text
              style={{
                fontFamily: "Gordita-Medium",
                color: "#C8E7FC",
                fontSize: 16,
              }}
            >
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Fontisto name="map-marker-alt" size={20} color="#FFF" />
              <Text
                style={{
                  fontFamily: "Gordita-Regular",
                  color: "#FFF",
                  fontSize: 13,
                  marginLeft: 10,
                }}
              >
                {item.location}
              </Text>
            </View>
          </View>

          <View style={{ marginRight: 10, marginBottom: 15 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  fontFamily: "Gordita-Regular",
                  color: "#FFF",
                  fontSize: 13,
                  marginRight: 6,
                }}
              >
                {item.rating}
              </Text>
              <MaterialCommunityIcons name="star" color="#C8E7FC" size={15} />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
                backgroundColor: "rgba(255,255,255,0.3)",
                padding: 8,
                borderRadius: 5,
              }}
            >
              <Image
                source={require("../../assets/images/icons/bitcoin-logo.png")}
              />
              <Text
                style={{
                  fontFamily: "SpaceGrotesk-Medium",
                  color: "#FFF",
                  fontSize: 13,
                  marginLeft: 10,
                }}
              >
                {item.bitcoin}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default BigCard;

const styles = StyleSheet.create({
  container: (size) => ({
    width: size ? size : 270,
    height: size ? 200 : 200,
    marginRight: 20,
    justifyContent: "flex-end",
  }),
});
