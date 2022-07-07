import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DetailPlaceScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  
  return (
    <ImageBackground source={item.bg} style={styles.container}>
      {/* Header */}
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.heading}
            onPress={() => navigation.goBack()}
          >
            <Feather name="chevron-left" color="#FFF" size={20} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.heading}>
            <MaterialCommunityIcons name="bookmark" color="#FFF" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Description */}
      <View style={styles.descriptionWrapper}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 10,
          }}
        >
          <View style={{ marginBottom: 15 }}>
            <Text
              style={{
                fontFamily: "Gordita-Regular",
                color: "#FFF",
                fontSize: 13,
                lineHeight: 25,
                textTransform: "uppercase",
              }}
            >
              {item.category}
            </Text>
            <Text
              style={{
                fontFamily: "Gordita-Medium",
                color: "#C8E7FC",
                fontSize: 20,
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
              <Text
                style={{
                  fontFamily: "Gordita-Regular",
                  color: "#FFF",
                  fontSize: 13,
                  lineHeight: 25,
                }}
              >
                {item.location}
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 15 }}>
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

        <Text style={styles.desc}>{item.desc}</Text>

        <View style={{ marginTop: 15 }}>
          <Text style={styles.desc}>Trip Details</Text>
          <View style={styles.listWrapper}>
            <MaterialCommunityIcons name="clock" size={15} color="#FFF" />
            <Text style={styles.text}>3 days 6 hours</Text>
          </View>
          <View style={styles.listWrapper}>
            <MaterialCommunityIcons name="rocket" size={15} color="#FFF" />
            <Text style={styles.text}>Space Walks</Text>
          </View>
          <View style={styles.listWrapper}>
            <MaterialCommunityIcons name="pizza" size={15} color="#FFF" />
            <Text style={styles.text}>Food & Drinks</Text>
          </View>
          <View style={styles.listWrapper}>
            <MaterialCommunityIcons name="wifi" size={15} color="#FFF" />
            <Text style={styles.text}>Free WiFi Included</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default DetailPlaceScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  heading: {
    backgroundColor: "rgba(249,249,249,.1)",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  header: {
    marginHorizontal: 25,
    marginTop: 55,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionWrapper: {
    marginHorizontal: 25,
    marginTop: 220,
  },
  desc: {
    fontFamily: "Gordita-Regular",
    color: "#FFF",
    lineHeight: 25,
    textAlign: "justify",
    fontSize: 15,
  },
  text: {
    fontFamily: "Gordita-Regular",
    color: "#FFF",
    lineHeight: 25,
    textAlign: "justify",
    fontSize: 14,
    lineHeight: 30,
    marginLeft: 10,
  },
  listWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
