import { theme } from "@/lib/ThemeProvider/ThemeProvider";
import React, { useState } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { Pressable, Text, StyleSheet } from "react-native";

export const CButton = ({
  onFormSubmit,
}: {
  onFormSubmit: (data: FieldValues) => Promise<void>;
}) => {
  const { handleSubmit } = useFormContext();

  const onSubmit = async (data: any) => {
    await onFormSubmit(data);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,

        pressed && styles.pressed, // Apply pressed effect
      ]}
      onPress={handleSubmit(onSubmit)}
    >
      <Text style={styles.buttonText}>Submit</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.primaryTextColor,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    transitionDuration: "200ms", // Works on Web
  },
  pressed: {
    backgroundColor: theme.secondaryTextColor, // Even darker color when pressed
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
