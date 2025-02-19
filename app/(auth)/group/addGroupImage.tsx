import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { imagePicker } from "@/lib/utils/imagePicker";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";
import { useRouter } from "expo-router";

const addGroupImage = () => {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);
  const pickImage = async () => {
    const url = await imagePicker(true);
    if (url) {
      setImage(url);
    }
  };
  const handleClick = () => {
    router.push("/(auth)/chat/2");
  };
  return (
    <View style={{ paddingTop: 25 }}>
      <Pressable
        onPress={() => pickImage()}
        style={{
          ...styles.container,
          borderRadius: "20%",
          backgroundColor: "red",
          overflow: "hidden",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: 30,
            backgroundColor: "rgba(60, 60, 60, 0.71)",

            zIndex: 10,
            position: "absolute",

            bottom: -1,
          }}
        >
          <Ionicons name="camera" size={20} color="white" />
        </View>

        <View
          style={{
            ...styles.container,
            borderRadius: "20%",
            overflow: "hidden",
            backgroundColor: "red",
          }}
        >
          <Image
            style={{}}
            width={200}
            height={200}
            source={{
              uri: image
                ? image
                : "https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg",
            }}
          />
        </View>
      </Pressable>

      <View
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 25,
        }}
      >
        <Pressable
          onPress={handleClick}
          style={({ pressed }) => ({
            width: 250,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: pressed
              ? theme.secondaryTextColor
              : theme.primaryTextColor,
            borderRadius: 12,
          })}
        >
          <Text style={{ color: theme.primaryBgColor, fontSize: 16 }}>
            Next
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default addGroupImage;

const styles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 180,
    height: 180,
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
  },
});
