import { View, StyleSheet, Image, Button, Pressable, Text } from "react-native";
import React, { useState } from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";
import CForm from "@/components/form/CForm";
import CInput from "@/components/form/CInput";
import Ionicons from "@expo/vector-icons/Ionicons";

import { CButton } from "@/components/form/CButton";
import { FieldValues } from "react-hook-form";
import { useRouter } from "expo-router";
import { imagePicker } from "@/lib/utils/imagePicker";

const EditProfile = () => {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);
  const def =
    "https://as2.ftcdn.net/jpg/02/97/17/03/220_F_297170390_FqLV6jaNz8fxpofkL42pfhMbCGUlR1OX.jpg";

  const pickImage = async () => {
    const url = await imagePicker();
    if (url) {
      setImage(url);
    }

    if (url) {
      const uriParts = url.split(".");
      const fileType = uriParts[uriParts.length - 1];
      const formData = new FormData();
      formData.append("image", {
        uri: url,
        name: `profile.${fileType}`,
        type: `image/${fileType}`,
      } as any);
      console.log(JSON.stringify(formData), "------------>>");
    }
  };

  const onFormSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <View
      style={{
        paddingRight: 0,
        paddingLeft: 0,
        backgroundColor: theme.primaryBgColor,
        height: "100%",
      }}
    >
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Ionicons
          onPress={() => {
            router.push("/(auth)/(tabs)/profile");
          }}
          style={{ marginLeft: 10, fontWeight: 500 }}
          name="arrow-back-sharp"
          size={20}
          color={theme.primaryTextColor}
        />
        <PageTitle title="Edit Profile"></PageTitle>
      </View>
      <Pressable
        onPress={() => pickImage()}
        style={{
          ...styles.container,
          borderRadius: "50%",
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
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            width={200}
            height={200}
            source={{
              uri: image ? image : def,
            }}
          />
        </View>
      </Pressable>
      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <CForm>
          <CInput required={false} name="name" label="Name"></CInput>
          <CInput required={false} name="email" label="Email"></CInput>
          <CInput required={false} name="mobile" label="Mobile"></CInput>
          <CButton onFormSubmit={onFormSubmit}></CButton>
        </CForm>
      </View>
    </View>
  );
};

export default EditProfile;
const styles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 160,
    height: 160,
  },
  image: {
    width: 200,
    height: 200,
  },
});
