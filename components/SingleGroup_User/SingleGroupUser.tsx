import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RoundImage from "../RoundImage/RoundImage";
import { useTheme } from "@/lib/ThemeProvider/ThemeProvider";

const SingleGroupUser = ({ data }: { data: any }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {/* user image */}
      <RoundImage image=""></RoundImage>
      <View>
        <Text style={{ color: theme.primaryTextColor }}> User Name</Text>
        <Text style={{ color: theme.secondaryTextColor }}>
          {" "}
          User last message.
        </Text>
      </View>
    </View>
  );
};

export default SingleGroupUser;

const styles = StyleSheet.create({});
