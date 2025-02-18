import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import SearchField from "@/components/SearchField/SearchField";
import SingleGroupUser from "@/components/SingleGroup_User/SingleGroupUser";

const Group = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View
      style={{
        paddingRight: 0,
        paddingLeft: 0,
        backgroundColor: "#ffffff",
        height: "100%",
      }}
    >
      <PageTitle title="Groups"></PageTitle>
      <SearchField></SearchField>

      <View style={styles.allUserChatView}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.allUserChatScrollview}
        >
          {/* user chat info */}
          {arr.map((i) => (
            <SingleGroupUser key={i} data={i}></SingleGroupUser>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Group;
const styles = StyleSheet.create({
  allUserChatView: {
    paddingRight: 2,
    paddingLeft: 2,
    marginTop: 5,
    height: 100, // Ensure the parent has a defined height
    gap: 10,
    paddingStart: 10,
    flex: 1, // Ensure the parent takes up the full available space
  },
  allUserChatScrollview: {
    flexDirection: "column",
    display: "flex",
    gap: 8,
    padding: 1,
  },
});
