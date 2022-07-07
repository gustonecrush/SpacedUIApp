import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SectionText = ({ text, screen }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 25,
        marginTop: 20,
        marginBottom: 15,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontFamily: "Gordita-Regular",
          color: "#C8E7FC",
          fontSize: 16,
        }}
      >
        {text}
      </Text>
      {text === "Feeling Adventurous?" ? null : (
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            padding: 8,
            borderRadius: "100%",
          }}
          onPress={() => navigation.navigate(screen)}
        >
          <Feather name="arrow-right" color="#FFF" size={18} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionText;

const styles = StyleSheet.create({});
