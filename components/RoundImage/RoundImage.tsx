import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const RoundImage = ({
  image,
  width = 60,
  height = 60,
}: {
  image: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      style={{ ...styles.userImage, width: width, height: height }}
      width={100}
      height={100}
      src="https://us.123rf.com/450wm/anastasiiaz/anastasiiaz2305/anastasiiaz230501347/204097098-image-of-man-sitting-on-bench-in-the-city-with-his-head-down-and-hands-covering-his-face-appearing.jpg?ver=6"
    />
  );
};

export default RoundImage;

const styles = StyleSheet.create({
  userImage: {
    borderRadius: 30, // Use a number instead of a string for borderRadius
    backgroundColor: "#dfdcdc",
    overflow: "hidden",
  },
});
