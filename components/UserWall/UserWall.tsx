import { Image, Pressable, Text, View } from "react-native";
import React from "react";

import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";

const UserWall = () => {
  const arr = [1, 2, 3, 4];

  return (
    <View style={{ display: "flex", gap: 10 }}>
      {arr.map((i) => (
        <View
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            backgroundColor: "white", // Required for shadow to be visible on iOS
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 1,
            elevation: 0.5, // For Android shadow
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row", // Image and text in a row
              gap: 10,
              marginTop: 6,
            }}
          >
            <View
              style={{
                width: 45,
                height: 45,

                marginRight: "auto",
                marginLeft: 5,
                borderRadius: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.primaryTextColor,
                padding: 2,
                overflow: "hidden",
              }}
            >
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--5I7-AM_uEYNgG35o6hG1E-jtlDr8pbZMki7yeedqDFfi1LmXqm-nmScen-JWPX2qI8&usqp=CAU"
                style={{ width: "100%", height: "100%", borderRadius: 100 }}
              ></Image>
            </View>
            <View style={{ width: "100%", marginRight: "auto" }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>User Name</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Ionicons name="earth" size={16}></Ionicons>
                <Text
                  style={{ fontSize: 14, fontWeight: "400", marginBottom: 1 }}
                >
                  {2} min ago
                </Text>
              </View>
            </View>
          </View>
          <View>
            {
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <Text style={{ marginLeft: 2 }}>Hi How are u </Text>
                <Image
                  width={200}
                  height={200}
                  style={{ width: "auto", height: 300 }}
                  src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg"
                ></Image>
              </View>
            }
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 50,
              height: 40,
              paddingLeft: 10,
            }}
          >
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <FontAwesome name="thumbs-up" size={20} color="black" />
              <Text>{1}k</Text>
            </Pressable>
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <FontAwesome name="commenting" size={20} color="black" />
              <Text>{1}k</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </View>
  );
};

export default UserWall;
