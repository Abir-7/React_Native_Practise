import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RoundImage = ({ image }: { image: string }) => {
  return <View style={styles.userImage}></View>;
};

export default RoundImage;

const styles = StyleSheet.create({
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // Use a number instead of a string for borderRadius
    backgroundColor: "#dfdcdc",
  },
});
