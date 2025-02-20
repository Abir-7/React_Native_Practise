import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PendingRequestList from "./pendingRequestList";
import SendRequest from "./userFeed";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import SearchUser from "./searchUser";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";
import UserFeed from "./userFeed";

const Tab = createMaterialTopTabNavigator();

export default function AuthLayout() {
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
    </Tab.Navigator>
  );
}
