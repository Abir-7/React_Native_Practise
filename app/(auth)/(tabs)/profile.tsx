import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";
import { Link } from "expo-router";

const profile = () => {
  return (
    <View
      style={{
        paddingRight: 0,
        paddingLeft: 0,
        backgroundColor: theme.primaryBgColor,
        height: "100%",
      }}
    >
      <PageTitle title="User Profile"></PageTitle>
      <View>
        <View style={styles.profileImage}></View>
      </View>

      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Text
          style={{
            color: theme.primaryTextColor,
            fontSize: 24,
            textAlign: "center",
            fontWeight: 500,
            marginTop: 20,
          }}
        >
          Md. Tazwarul Islam Abir
        </Text>
        <Text
          style={{
            color: theme.primaryTextColor,
            fontSize: 14,
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          md.tazwarul.islam.07@gmail.com
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed, // Apply pressed effect
          ]}
        >
          <Link href={"/(auth)/editProfile/profileEdit"}>
            <Text
              style={{
                fontWeight: "500",

                fontSize: 15,
                color: theme.primaryBgColor,
              }}
            >
              Edit Profile
            </Text>
          </Link>
        </Pressable>
      </View>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  profileImage: {
    width: 160,
    height: 160,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    borderRadius: "50%",
    backgroundColor: theme.secondaryTextColor,
  },
  button: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 150,
    marginTop: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: theme.primaryTextColor,
  },
  pressed: { backgroundColor: theme.secondaryTextColor },
});
