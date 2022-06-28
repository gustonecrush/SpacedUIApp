import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ImageBackground,
} from "react-native";
import data from "../../data";

import { useFonts } from "expo-font";

const { width, height } = Dimensions.get("window");
const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;
const DOT_SIZE = 40;

const Heroes = ({ hero, index, scrollX }) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  const translateXHeading = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.2, 0, -width * 0.2],
  });

  const translateXDescription = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.6, 0, -width * 0.6],
  });

  return (
    <View style={styles.heroStyle}>
      <Animated.Image
        source={hero.imageUri}
        style={[styles.imageStyle, { transform: [{ scale }] }]}
      />
      <View style={styles.textContainer}>
        <Animated.Text
          style={[
            styles.heading,
            { transform: [{ translateX: translateXHeading }] },
          ]}
        >
          {hero.name}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.description,
            { transform: [{ translateX: translateXDescription }] },
          ]}
        >
          {hero.description}
        </Animated.Text>
      </View>
    </View>
  );
};

const Pagination = () => {
  return (
    <View style={styles.pagination}>
      {data.map((item, index) => {
        return (
          <View style={styles.paginationDotContainer} key={index}>
            <View
              style={([styles.paginationDot], { backgroundColor: item.color })}
            />
          </View>
        );
      })}
    </View>
  );
};

const Movies = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const [loaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) return false;

  return (
    <View style={styles.container}>
      <StatusBar hidden style="auto"></StatusBar>
      <ImageBackground source={require("../../assets/home-bg.png")}>
        <Animated.FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item, index }) => (
            <Heroes hero={item} index={index} scrollX={scrollX} />
          )}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        />
        {/* <Image style={styles.logo} source={require('./assets/captain-america-logo.png')} /> */}
        <Pagination />
      </ImageBackground>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#050508",
    },
    heroStyle: {
      width,
      height,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 90,
    },
    imageStyle: {
      width: 350,
      height: 250,
      resizeMode: "contain",
      flex: 1,
      marginBottom: 10,
    },
    textContainer: {
      alignItems: "flex-start",
      alignSelf: "center",
      flex: 0.9,
      marginLeft: -50,
    },
    heading: {
      color: "#444",
      textTransform: "uppercase",
      fontSize: 24,
      fontWeight: "800",
      letterSpacing: 1.5,
      marginBottom: 5,
      fontFamily: "Poppins-Bold",
    },
    description: {
      color: "#CCC",
      fontWeight: "600",
      textAlign: "left",
      width: width * 0.75,
      // marginRight: 55,
      fontSize: 16,
      lineHeight: 16 * 1.5,
      fontFamily: "Poppins-Regular",
    },
    // logo: {
    //   opacity: 0.9,
    //   height: LOGO_HEIGHT,
    //   width: LOGO_WIDTH,
    //   resizeMode: "contain",
    //   position: "absolute",
    //   left: 10,
    //   bottom: 10,
    //   transform: [
    //     { translateX: -LOGO_WIDTH / 2 },
    //     { translateY: -LOGO_HEIGHT / 2 },
    //     { rotateZ: "-90deg" },
    //     { translateX: LOGO_WIDTH / 3 },
    //     { translateY: LOGO_HEIGHT / 2 },
    //   ],
    // },
    pagination: {
      position: "absolute",
      right: 20,
      bottom: 40,
      flexDirection: "row",
      height: DOT_SIZE,
      backgroundColor: "#000",
    },
  });
  

