import { theme } from "@/lib/ThemeProvider/ThemeProvider";
import React from "react";
import { View } from "react-native";
import * as Progress from "react-native-progress";

const UserStories = () => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Progress.Bar
          borderRadius={10}
          color={theme.primaryTextColor}
          style={{ flex: 1, marginRight: 5 }}
          borderWidth={0.5}
          progress={0.5}
          height={5}
          width={null}
          animationType="spring"
          animated
        />
        <Progress.Bar
          animationType="spring"
          animated
          borderRadius={10}
          color={theme.primaryTextColor}
          width={null}
          style={{ flex: 1 }}
          borderWidth={0.5}
          progress={0.5}
          height={5}
        />
      </View>
    </View>
  );
};

export default UserStories;
