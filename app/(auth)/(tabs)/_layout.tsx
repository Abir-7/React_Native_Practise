import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome icons
import { theme } from "@/lib/ThemeProvider/ThemeProvider";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: theme.primaryBgColor },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          tabBarLabelStyle: {
            color: theme.primaryTextColor, // Change the title color here
          },
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="comment"
              size={size}
              color={
                focused ? theme.secondaryTextColor : theme.primaryTextColor
              }
            /> // Home icon
          ),
        }}
      />
      <Tabs.Screen
        name="group"
        options={{
          title: "Groups",
          tabBarLabelStyle: {
            color: theme.primaryTextColor, // Change the title color here
          },
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="group"
              size={size}
              color={
                focused ? theme.secondaryTextColor : theme.primaryTextColor
              }
            /> // Profile icon
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabelStyle: {
            color: theme.primaryTextColor, // Change the title color here
          },
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="user"
              size={size}
              color={
                focused ? theme.secondaryTextColor : theme.primaryTextColor
              }
            /> // Profile icon
          ),
        }}
      />
    </Tabs>
  );
}
