import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome icons

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} /> // Home icon
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} /> // Profile icon
          ),
        }}
      />
    </Tabs>
  );
}
