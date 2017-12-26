import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={heading}>HODL Coin Checker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    marginTop: 55,
    alignItems: "center"
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20
  }
});

const { headerContainer, heading } = styles;

export default Header;
