import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.bannerImg}
      source={require("../assets/background.jpg")}>
      <View
        style={{
          position: "absolute",
          top: -10,
          alignItems:"center"
        }}>
        <Image
          source={require("../assets/7949450.png")}
        />
        <Text style={{position:"absolute", bottom:85}}>Sell what you don't need</Text>
      </View>
      <View style={styles.loginBtn}></View>
      <View style={styles.registerbtn}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bannerImg: {
    flex: 1,
    justifyContent: "flex-end",
    position:"relative",
    alignItems: "center",
  },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerbtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
