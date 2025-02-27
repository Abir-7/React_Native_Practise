import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import UserFeed from "./userFeed";
import SearchUser from "./searchUser";
import PendingRequestList from "./pendingRequestList";
import Notification from "./notification";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";

const Tab = createMaterialTopTabNavigator();

export default function AuthLayout() {
  const [notificationCount, setNotificationCount] = useState(0);

  // Simulating API Call or Event Listener for New Notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      // Replace with actual API call or socket event listener
      const newCount = 5; // Example count from API
      setNotificationCount(newCount);
    };

    fetchNotifications();

    // If using WebSocket or Push Notifications, set up a listener
    // return () => { cleanup logic if needed }
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: false,
        animationEnabled: false,
        tabBarIndicatorStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="Send Request List"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="feed" size={24} color="black" />
          ),
          tabBarLabel: () => null,
        }}
        component={UserFeed}
      />

      <Tab.Screen
        name="Search User"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              size={22}
              color={
                focused ? theme.secondaryTextColor : theme.primaryTextColor
              }
            />
          ),
          tabBarLabel: () => null,
        }}
        component={SearchUser}
      />

      <Tab.Screen
        name="Pending Request List"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-add"
              size={22}
              color={
                focused ? theme.secondaryTextColor : theme.primaryTextColor
              }
            />
          ),
          tabBarLabel: () => null,
        }}
        component={PendingRequestList}
      />

      <Tab.Screen
        name="Notification"
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="notifications"
                size={22}
                color={
                  focused ? theme.secondaryTextColor : theme.primaryTextColor
                }
              />
              {notificationCount > 0 && (
                <View
                  style={{
                    position: "absolute",
                    right: -5,
                    top: -5,
                    backgroundColor: "red",
                    borderRadius: 10,
                    width: 16,
                    height: 16,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 10 }}>
                    {notificationCount}
                  </Text>
                </View>
              )}
            </View>
          ),
          tabBarLabel: () => null,
        }}
        component={Notification}
      />
    </Tab.Navigator>
  );
}
