import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@/lib/ThemeProvider/ThemeProvider";

const PageTitle = ({ title }: { title: string }) => {
  return <Text style={styles.pageTitle}>{title}</Text>;
};

export default PageTitle;

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 4,
    paddingLeft: 10,
    color: theme.primaryTextColor,
  },
});
