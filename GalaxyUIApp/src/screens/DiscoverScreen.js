import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  BigCard,
  HeaderText,
  Heading,
  InputSearch,
  SectionText,
  SmallCard,
} from "../components";
import Destinations from "../../assets/datas/Destinations";
import { useFonts } from "expo-font";
import Places from "../../assets/datas/Places";
import Categories from "../../assets/datas/Categories";

const DiscoverScreen = () => {
  const [loaded] = useFonts({
    "SpaceGrotesk-Bold": require("../../assets/fonts/SpaceGrotesk-Bold.ttf"),
    "SpaceGrotesk-Regular": require("../../assets/fonts/SpaceGrotesk-Regular.ttf"),
    "SpaceGrotesk-Medium": require("../../assets/fonts/SpaceGrotesk-Medium.ttf"),
    "Gordita-Regular": require("../../assets/fonts/Gordita-Regular.otf"),
    "Gordita-Medium": require("../../assets/fonts/Gordita-Medium.otf"),
    "Gordita-Bold": require("../../assets/fonts/Gordita-Bold.otf"),
  });

  if (!loaded) return false;

  return (
    <ImageBackground
      source={require("../../assets/images/bg-home.png")}
      style={{ height: "100%", backgroundColor: '#000' }}
      imageStyle={{ height: "100%", opacity: 0.5 }}
    >
      <View style={styles.wrapper}>
        <Heading />
        <HeaderText text1="Where do you" text2="want to fly today?" />
        <InputSearch />

        <ScrollView
          vertical
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 400, marginTop: 25 }}
        >
          <View style={{}}></View>
          <SectionText text="Featured Destination" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.featuredWrapper}
          >
            {Destinations.map((item, index) => (
              <SmallCard item={item} key={index} />
            ))}
          </ScrollView>

          <SectionText text="Discover Places" screen="MoreDiscoverPlaces" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.featuredWrapper}
          >
            {Places.map((item, index) => (
              <BigCard item={item} key={index} />
            ))}
          </ScrollView>

          <View>
            <SectionText text="Feeling Adventurous?" />
            <Text style={styles.subSectionText}>
              Visit locations in this trending categories
            </Text>
          </View>

          <View style={styles.categoryWrapper}>
            {Categories.map((item, index) => (
              <TouchableOpacity key={index}>
                <ImageBackground
                  imageStyle={{ borderRadius: 5 }}
                  style={[
                    styles.imageCategory,
                    item.id % 2 == 1 ? { marginRight: 15 } : { marginRight: 0 },
                  ]}
                  source={item.image}
                >
                  <Text style={styles.categoryName}>{item.name}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <Image
        source={require("../../assets/images/planets/earth-1.png")}
        style={styles.imgDecoration}
      />
    </ImageBackground>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 2,
  },
  imgDecoration: {
    width: 270,
    height: 270,
    top: -100,
    right: -50,
    position: "absolute",
    zIndex: 0,
  },
  featuredWrapper: {
    marginHorizontal: 25,
  },
  subSectionText: {
    fontFamily: "Gordita-Regular",
    color: "#FFFFFF",
    marginHorizontal: 25,
    marginTop: -5,
  },
  categoryWrapper: {
    flexDirection: "row",
    marginHorizontal: 25,
    marginTop: 20,
    flexWrap: "wrap",
  },
  imageCategory: {
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 100,
    marginBottom: 15,
  },
  categoryName: {
    fontFamily: "Gordita-Medium",
    fontSize: 16,
    color: "#FFF",
  },
});
