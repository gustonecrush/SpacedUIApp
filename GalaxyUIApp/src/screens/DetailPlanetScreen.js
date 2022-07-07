import React from "react";
import { useFonts } from "expo-font";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { BookTicket, Explore } from "../components";

const DetailPlanetScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  const [loaded] = useFonts({
    "SpaceGrotesk-Bold": require("../../assets/fonts/SpaceGrotesk-Bold.ttf"),
    "SpaceGrotesk-Medium": require("../../assets/fonts/SpaceGrotesk-Medium.ttf"),
    "SpaceGrotesk-Light": require("../../assets/fonts/SpaceGrotesk-Light.ttf"),
    "SpaceGrotesk-Regular": require("../../assets/fonts/SpaceGrotesk-Regular.ttf"),
    "Gordita-Regular": require("../../assets/fonts/Gordita-Regular.otf"),
    "Gordita-Medium": require("../../assets/fonts/Gordita-Medium.otf"),
  });

  if (!loaded) return false;

  return (
    <ImageBackground
      source={require("../../assets/images/bg-home.png")}
      style={{ height: "100%" }}
      imageStyle={{ height: "100%" }}
    >
      <StatusBar hidden />

      {/* Header */}
      <TouchableOpacity
        style={styles.heading}
        onPress={() => navigation.goBack()}
      >
        <Feather name="chevron-left" color="#FFF" size={25} />
      </TouchableOpacity>

      {/* Header Text */}
      <View style={styles.planetInfoWrapper}>
        <Text style={styles.planetName}>{item.name}</Text>
        <Text style={styles.planetCalled}>{item.called}</Text>
      </View>

      {/* Book Tikcet */}
      <BookTicket />

      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={{ zIndex: 1, paddingTop: 15 }}
      >
        {/* About Earth-1 */}
        <View style={styles.descriptionWrapper}>
          <Text style={styles.aboutHeader}>About {item.name}</Text>
          <Text style={styles.description}>{item.description1}</Text>
          <TouchableOpacity>
            <Image
              source={item.thumbVideo}
              style={{
                marginVertical: 25,
                width: "100%",
                height: 200,
                resizeMode: "cover",
              }}
            />
          </TouchableOpacity>

          <Text style={[styles.description, { marginTop: 5 }]}>
            {item.description2}
          </Text>
        </View>
        {/* Video */}
        {/* About Earth-2 */}
        {/* Take a Trip */}
      </ScrollView>
      <Image source={item.planet} style={styles.planetImg} />
      <View style={{ zIndex: 2, bottom: -80 }}>
        <Explore screen="Detail" text="Take a trip" />
      </View>
    </ImageBackground>
  );
};

export default DetailPlanetScreen;

const styles = StyleSheet.create({
  descriptionWrapper: {
    marginHorizontal: 25,
    marginTop: 25,
    marginBottom: 130,
  },
  aboutHeader: {
    color: "#C8E7FC",
    fontFamily: "Gordita-Regular",
    fontSize: 16,
    marginBottom: 15,
  },
  description: {
    color: "#FFF",
    fontFamily: "Gordita-Regular",
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 31,
  },
  heading: {
    marginHorizontal: 25,
    marginTop: 50,
    backgroundColor: "rgba(249,249,249,.1)",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  planetInfoWrapper: {
    alignItems: "left",
    marginHorizontal: 25,
    marginTop: 50,
  },
  planetName: {
    fontFamily: "SpaceGrotesk-Bold",
    color: "#FFF",
    fontSize: 25,
    textTransform: "uppercase",
  },
  planetCalled: {
    fontFamily: "Gordita-Regular",
    color: "#C8E7FC",
    textTransform: "uppercase",
    fontSize: 16,
    marginTop: 10,
  },
  planetImg: {
    position: "absolute",
    top: -20,
    right: -50,
    zIndex: 0,
  },
});
