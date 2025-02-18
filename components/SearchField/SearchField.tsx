import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";

const SearchField = () => {
  return (
    <View
      style={{
        paddingLeft: 6,
        paddingRight: 6,
        marginBottom: 4,
      }}
    >
      <TextInput style={styles.searchinput} />
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  searchinput: {
    height: 33,
    borderWidth: 1,
    paddingTop: 0,
    paddingBottom: 0,
    borderColor: theme.primaryTextColor,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
