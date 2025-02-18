import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome icons
import { theme } from "@/lib/ThemeProvider/ThemeProvider";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              name="comment"
              size={size}
              color={theme.primaryTextColor}
            /> // Home icon
          ),
        }}
      />
      <Tabs.Screen
        name="group"
        options={{
          title: "Groups",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              name="group"
              size={size}
              color={theme.primaryTextColor}
            /> // Profile icon
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              name="user"
              size={size}
              color={theme.primaryTextColor}
            /> // Profile icon
          ),
        }}
      />
    </Tabs>
  );
}
