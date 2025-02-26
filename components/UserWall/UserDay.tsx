import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const UserDay = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
        }}
      >
        <View
          style={{
            width: 110,
            height: 160,
            borderRadius: 12,
            backgroundColor: theme.primaryTextColor,
          }}
        >
          <View
            style={{
              width: 110,
              height: 100,
              borderBottomRightRadius: 0,
              borderRadius: 12,
              backgroundColor: theme.secondaryTextColor,
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "70%",
                borderRadius: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.primaryBgColor,
              }}
            >
              <Ionicons name="add-circle" size={40}></Ionicons>
            </View>
          </View>
        </View>

        {arr.map((i) => (
          <View
            key={i}
            style={{
              width: 110,
              height: 160,
              borderRadius: 12,
              backgroundColor: theme.secondaryTextColor,
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                marginLeft: "8%",
                marginRight: "auto",
                marginTop: "8%",
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

            <Text style={{ marginTop: "auto", marginBottom: 5, marginLeft: 9 }}>
              Name
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default UserDay;

const styles = StyleSheet.create({});
