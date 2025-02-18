import PageTitle from "@/components/PageTitle/PageTitle";
import RoundImage from "@/components/RoundImage/RoundImage";
import SearchField from "@/components/SearchField/SearchField";
import SingleGroupUser from "@/components/SingleGroup_User/SingleGroupUser";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";

import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";

export default function Index() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <View
      style={{
        paddingRight: 0,
        paddingLeft: 0,
        backgroundColor: theme.primaryBgColor,
        height: "100%",
      }}
    >
      <PageTitle title="Chats"></PageTitle>
      <SearchField></SearchField>
      <View
        style={{
          marginTop: 9,
          marginBottom: 9,
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {arr.map((i) => (
            <View
              key={i}
              style={{
                width: "auto",
                marginLeft: 10,
                marginRight: 4,
              }}
            >
              {/* user image */}

              <RoundImage image=""></RoundImage>
              <Text
                style={{
                  width: "100%",
                  textAlign: "center",

                  color: theme.primaryTextColor,
                }}
              >
                name {/* Name    */}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* all user chat */}
      <View style={styles.allUserChatView_1}>
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
}
const styles = StyleSheet.create({
  allUserChatView_1: {
    paddingRight: 2,
    paddingLeft: 2,

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
